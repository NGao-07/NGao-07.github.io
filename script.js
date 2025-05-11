// script.js
document.addEventListener('DOMContentLoaded', function() {
    const {
        personalInfo, education, researchExperience, publications,
        rewards, news, leadershipActivities, skills, notepadContent, references
    } = cvData;

    // Helper function to bold your name in author lists
    function formatAuthors(authors) {
        return authors.replace(/Gao N(,| |$)/g, '<strong>Gao N</strong>$1');
    }

    // Populate Hero Section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.innerHTML = `
            <div id="hero-content">
                <img src="${personalInfo.pictureUrl}" alt="${personalInfo.name}">
                <div id="hero-text">
                    <h1>${personalInfo.name}</h1>
                    <p>${personalInfo.title}</p>
                    <p>${personalInfo.affiliation}</p>
                    <p class="social-links">
                        ${personalInfo.cvUrl ? `<a href="${personalInfo.cvUrl}" target="_blank">CV</a> | ` : ''}
                        ${personalInfo.googleScholarUrl !== "#" ? `<a href="${personalInfo.googleScholarUrl}" target="_blank">Google Scholar</a> | ` : ''}
                        ${personalInfo.linkedInUrl !== "#" ? `<a href="${personalInfo.linkedInUrl}" target="_blank">LinkedIn</a> | ` : ''}
                        ${personalInfo.githubUrl !== "#" ? `<a href="${personalInfo.githubUrl}" target="_blank">GitHub</a>` : ''}
                    </p>
                </div>
            </div>
        `;
    }
    
    // Populate About Content
    const aboutContent = document.getElementById('about-content');
    if (aboutContent) {
        aboutContent.innerHTML = `<p>${personalInfo.introBlurb}</p>`;
    }

    // Populate Education
    const educationContent = document.getElementById('education-content');
    if (educationContent) {
        educationContent.innerHTML = education.map(edu => `
            <div class="education-item">
                <p><strong>${edu.degree}</strong></p>
                <p>${edu.institution}</p>
                <p><em>${edu.period}</em></p>
                ${edu.advisor ? `<p><small>${edu.advisor}</small></p>` : ''}
            </div>
        `).join('');
    }

    // Populate Research Interests
    const researchInterestsContent = document.getElementById('research-interests-content');
    if (researchInterestsContent) {
        researchInterestsContent.innerHTML = `
            <ul>
                ${personalInfo.researchInterests.map(interest => `
                    <li>
                        <strong>${interest.name}:</strong> ${interest.description}
                    </li>
                `).join('')}
            </ul>
        `;
    }
    
    // Populate Research Experience / Projects
    const projectsContent = document.getElementById('projects-content');
    if (projectsContent) {
        projectsContent.innerHTML = researchExperience.map(exp => `
            <article class="item-card">
                <h4>${exp.title}</h4>
                <p class="meta">${exp.role_period}</p>
                <ul>
                    ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                ${exp.mentions && exp.mentions.length > 0 ? `<p><small><em>Mentions: ${exp.mentions.join(', ')}</em></small></p>` : ''}
            </article>
        `).join('');
    }
    // Alias #research to scroll to #projects
    const researchNav = document.querySelector('a[href="#research"]');
    if (researchNav) {
        researchNav.href = "#projects";
    }


    // Populate Publications
    const publicationsContent = document.getElementById('publications-content');
    if (publicationsContent) {
        let html = '<h3>Journal Papers</h3>';
        html += publications.journalPapers.map(pub => `
            <article class="item-card">
                <p>${formatAuthors(pub.authors)} "${pub.title}" <em>${pub.journal}</em>. 
                ${pub.link && pub.link !== "#" ? `<a href="${pub.link}" target="_blank">[Link]</a>` : ''}</p>
            </article>
        `).join('');

        if (publications.conferenceAbstracts && publications.conferenceAbstracts.length > 0) {
            html += '<h3>Conference Abstracts & Presentations</h3>';
            html += publications.conferenceAbstracts.map(conf => `
                <article class="item-card">
                    <p>${formatAuthors(conf.authors)} "${conf.title}" <em>${conf.conference}</em>.
                    ${conf.link && conf.link !== "#" ? `<a href="${conf.link}" target="_blank">[Link]</a>` : ''}</p>
                </article>
            `).join('');
        }
        
        if (publications.patents && publications.patents.length > 0) {
            html += '<h3>Patents</h3>';
            html += publications.patents.map(pat => `
                <article class="item-card">
                     <p>${formatAuthors(pat.inventors)}. "${pat.title}". <em>${pat.id_date}</em>.
                     ${pat.link && pat.link !== "#" ? `<a href="${pat.link}" target="_blank">[Link]</a>` : ''}</p>
                </article>
            `).join('');
        }
        publicationsContent.innerHTML = html;
    }

    // Populate News
    const newsContent = document.getElementById('news-content');
    if (newsContent && news.length > 0) {
        newsContent.innerHTML = news.map(item => `
            <article class="item-card">
                <p><strong>${item.date}:</strong> ${item.content}</p>
            </article>
        `).join('');
    } else if (newsContent) {
        newsContent.innerHTML = `<p>No news items at the moment.</p>`;
    }

    // Populate Rewards
    const rewardsContent = document.getElementById('rewards-content');
    if (rewardsContent && rewards.length > 0) {
        rewardsContent.innerHTML = rewards.map(reward => `
            <article class="item-card">
                <p><strong>${reward.year}:</strong> ${reward.name} <em>(${reward.institution})</em></p>
            </article>
        `).join('');
    } else if (rewardsContent) {
        rewardsContent.innerHTML = `<p>No rewards to display at the moment.</p>`;
    }
    
    // Populate Skills
    const skillsContent = document.getElementById('skills-content');
    if (skillsContent) {
        let html = '<div class="skill-category"><strong>Programming Languages:</strong><ul>';
        html += skills.programming.map(skill => `<li>${skill}</li>`).join('');
        html += '</ul></div>';

        html += '<div class="skill-category"><strong>Monte Carlo Codes:</strong><ul>';
        html += skills.monteCarlo.map(skill => `<li>${skill}</li>`).join('');
        html += '</ul></div>';
        
        html += '<div class="skill-category"><strong>Radiation Oncology:</strong>';
        for (const [key, value] of Object.entries(skills.radiationOncology)) {
            html += `<p><small>${key}: ${Array.isArray(value) ? value.join(', ') : value}</small></p>`;
        }
        html += '</div>';

        html += '<div class="skill-category"><strong>Radiology:</strong>';
         for (const [key, value] of Object.entries(skills.radiology)) {
            html += `<p><small>${key}: ${Array.isArray(value) ? value.join(', ') : value}</small></p>`;
        }
        html += '</div>';
        
        html += '<div class="skill-category"><strong>Languages:</strong><ul>';
        html += skills.languages.map(lang => `<li>${lang}</li>`).join('');
        html += '</ul></div>';
        skillsContent.innerHTML = html;
    }

    // Populate Leadership & Activities
    const leadershipActivitiesContent = document.getElementById('leadership-activities-content');
    if (leadershipActivitiesContent) {
        leadershipActivitiesContent.innerHTML = leadershipActivities.map(activity => `
            <article class="item-card">
                <h4>${activity.role}</h4>
                <p class="meta">${activity.organization} (${activity.period})</p>
                <ul>
                    ${activity.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </article>
        `).join('');
    }
    
    // Populate Notepad
    const notepadElement = document.getElementById('notepad-content');
    if (notepadElement) {
        notepadElement.innerHTML = `<p>${notepadContent}</p>`;
    }

    // Populate Contact
    const contactContent = document.getElementById('contact-content');
    if (contactContent) {
        contactContent.innerHTML = `
            <p><strong>Email:</strong> <a href="mailto:${personalInfo.email}">${personalInfo.email}</a></p>
            <p><strong>Mobile:</strong> ${personalInfo.mobile}</p>
            <p><strong>Address:</strong> ${personalInfo.address}</p>
        `;
    }

    // Populate References (Optional)
    const referencesContent = document.getElementById('references-content');
    if (referencesContent && references && references.length > 0) {
        let html = '<h4>References (Available upon request)</h4>'; // Or list them directly
         html += references.map(ref => `
            <article class="reference-item item-card">
                <p><strong>${ref.name}</strong></p>
                ${ref.email ? `<p>Email: <a href="mailto:${ref.email}">${ref.email}</a></p>` : ''}
                ${ref.mobile ? `<p>Mobile: ${ref.mobile}</p>` : ''}
                ${ref.titles ? `<ul>${ref.titles.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}
            </article>
        `).join('');
        referencesContent.innerHTML = html;
    }


    // Footer Year & Last Updated
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-updated').textContent = document.lastModified.split(' ')[0]; // Basic last modified date

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // For #hero, we go to the very top. For others, to the section.
            if (this.getAttribute('href') === '#hero' || this.getAttribute('href') === '#') {
                 e.preventDefault();
                 window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    // Calculate position considering sticky header
                    const headerOffset = document.getElementById('navbar').offsetHeight || 70; // fallback
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});