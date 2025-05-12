// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Destructure skills and notepadContent, but they might be undefined if removed from data.js
    const { personalInfo, navigation, education, researchExperience, publications, news, rewards, /* skills, notepadContent, */ logoText } = cvData;

    // Utility Function to bold your name
    function formatAuthors(authorsStr) {
        if (!authorsStr) return '';
        return authorsStr.replace(/Gao N(,| |$)/gi, '<strong>Gao N</strong>$1');
    }
    
    // Populate Logo Texts
    document.getElementById('logo-text-header').textContent = logoText;
    document.getElementById('logo-text-footer').textContent = logoText;

    // Populate Hero Section
    document.getElementById('hero-name').textContent = personalInfo.name;
    document.getElementById('hero-title').textContent = personalInfo.title;
    document.getElementById('hero-description').innerHTML = personalInfo.introBlurb;
    document.getElementById('hero-image').src = personalInfo.pictureUrl;
    document.getElementById('hero-image').alt = personalInfo.name;

    // Timeline Item Creator (for Education & Research)
    function createTimelineItem(item, isLast = false, type = 'education') {
        const iconClass = type === 'education' ? 'fas fa-graduation-cap' : 'fas fa-flask';
        const companyOrInstitution = item.institution || item.company || '';
        
        return `
            <div class="relative pl-10 pb-8 ${!isLast ? 'border-l-2 border-blue-300' : ''} group animate-fade-in">
                <div class="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 ring-4 ring-white group-hover:scale-110 transition-transform flex items-center justify-center">
                     <i class="${iconClass} text-white text-xs"></i>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-lg card-hover transition-all">
                    <h3 class="text-xl font-semibold text-gray-800 mb-1">${item.title || item.degree}</h3>
                    ${companyOrInstitution ? `<div class="text-md text-blue-700 font-medium mb-1">${companyOrInstitution}</div>` : ''}
                    <div class="text-sm text-gray-500 mb-3">${item.period}</div>
                    <p class="text-gray-700 mb-3">${item.description}</p>
                    ${item.tags && item.tags.length > 0 ? `
                        <div class="flex flex-wrap gap-2">
                            ${item.tags.map(tag => `<span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // Populate Education Timeline
    const educationContainer = document.getElementById('education-timeline');
    if (educationContainer && education && education.length > 0) {
        education.forEach((edu, index) => {
            educationContainer.innerHTML += createTimelineItem(edu, index === education.length - 1, 'education');
        });
    }
    
    // Populate Research Experience Timeline
    const researchContainer = document.getElementById('research-timeline');
    if (researchContainer && researchExperience && researchExperience.length > 0) {
        researchExperience.forEach((exp, index) => {
            researchContainer.innerHTML += createTimelineItem(exp, index === researchExperience.length - 1, 'research');
        });
    }

    // Populate Publications
    const publicationsContainer = document.getElementById('publications-content');
    if (publicationsContainer && publications) {
        let pubHtml = '';
        if (publications.journalPapers && publications.journalPapers.length > 0) {
            pubHtml += `<div class="animate-fade-in"><h3 class="text-2xl font-semibold text-gray-800 mb-6">Journal Papers</h3><div class="space-y-6">`;
            publications.journalPapers.forEach(pub => {
                pubHtml += `
                    <div class="bg-white p-6 rounded-lg shadow-lg card-hover">
                        <h4 class="text-lg font-semibold text-blue-700 mb-1">${pub.title}</h4>
                        <p class="text-sm text-gray-600 mb-1"><em>${pub.journal}</em>, ${pub.year}</p>
                        <p class="text-sm text-gray-500 mb-2">${formatAuthors(pub.authors)}</p>
                        <p class="text-gray-700 mb-3 text-sm">${pub.description || ''}</p>
                        ${pub.link && pub.link !== "#" ? `<a href="${pub.link}" target="_blank" class="text-blue-600 hover:text-indigo-700 font-medium text-sm">Read Paper <i class="fas fa-external-link-alt ml-1"></i></a>` : ''}
                    </div>`;
            });
            pubHtml += `</div></div>`;
        }
        if (publications.conferenceAbstracts && publications.conferenceAbstracts.length > 0) {
            pubHtml += `<div class="mt-10 animate-fade-in delay-100"><h3 class="text-2xl font-semibold text-gray-800 mb-6">Conference Presentations & Abstracts</h3><div class="space-y-6">`;
            publications.conferenceAbstracts.forEach(conf => {
                pubHtml += `
                    <div class="bg-white p-6 rounded-lg shadow-lg card-hover">
                        <h4 class="text-lg font-semibold text-blue-700 mb-1">${conf.title}</h4>
                        <p class="text-sm text-gray-600 mb-1"><em>${conf.conference}</em>, ${conf.year}</p>
                        <p class="text-sm text-gray-500 mb-2">${formatAuthors(conf.authors)}</p>
                        <p class="text-gray-700 mb-3 text-sm">${conf.description || ''}</p>
                        ${conf.link && conf.link !== "#" ? `<a href="${conf.link}" target="_blank" class="text-blue-600 hover:text-indigo-700 font-medium text-sm">Details <i class="fas fa-external-link-alt ml-1"></i></a>` : ''}
                    </div>`;
            });
            pubHtml += `</div></div>`;
        }
        if (publications.patents && publications.patents.length > 0) {
            pubHtml += `<div class="mt-10 animate-fade-in delay-200"><h3 class="text-2xl font-semibold text-gray-800 mb-6">Patents</h3><div class="space-y-6">`;
            publications.patents.forEach(pat => {
                pubHtml += `
                    <div class="bg-white p-6 rounded-lg shadow-lg card-hover">
                        <h4 class="text-lg font-semibold text-blue-700 mb-1">${pat.title}</h4>
                        <p class="text-sm text-gray-600 mb-1"><em>${pat.id_date}</em>, ${pat.year}</p>
                         <p class="text-sm text-gray-500 mb-2">${formatAuthors(pat.authors)}</p>
                        <p class="text-gray-700 mb-3 text-sm">${pat.description || ''}</p>
                        ${pat.link && pat.link !== "#" ? `<a href="${pat.link}" target="_blank" class="text-blue-600 hover:text-indigo-700 font-medium text-sm">View Patent <i class="fas fa-external-link-alt ml-1"></i></a>` : ''}
                    </div>`;
            });
            pubHtml += `</div></div>`;
        }
        publicationsContainer.innerHTML = pubHtml;
    }

    // Populate News & Rewards
    const newsList = document.getElementById('news-list');
    if (newsList && news && news.length > 0) {
        news.forEach(item => {
            newsList.innerHTML += `
                <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start space-x-3 animate-fade-in">
                    <i class="${item.icon || 'fas fa-calendar-alt'} text-blue-600 text-xl mt-1"></i>
                    <div>
                        <p class="font-medium text-gray-800">${item.date}</p>
                        <p class="text-gray-700 text-sm">${item.content}</p>
                    </div>
                </div>`;
        });
    }

    const rewardsList = document.getElementById('rewards-list');
    if (rewardsList && rewards && rewards.length > 0) {
        rewards.forEach(item => {
            rewardsList.innerHTML += `
                <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start space-x-3 animate-fade-in delay-100">
                    <i class="${item.icon || 'fas fa-award'} text-indigo-600 text-xl mt-1"></i>
                    <div>
                        <p class="font-medium text-gray-800">${item.name}</p>
                        <p class="text-gray-700 text-sm">${item.institution} - ${item.year}</p>
                    </div>
                </div>`;
        });
    }

    // Populate Contact Information
    const contactInfoContainer = document.getElementById('contact-info-details');
    if (contactInfoContainer && personalInfo.contact) {
        const { email, phone, address } = personalInfo.contact;
        let contactHtml = '';
        if (email) {
            contactHtml += `
                <div class="flex items-center animate-fade-in">
                    <div class="bg-blue-100 p-3 rounded-full mr-4"><i class="fas fa-envelope text-xl text-blue-600"></i></div>
                    <div>
                        <h4 class="font-medium text-gray-800">Email</h4>
                        <a href="mailto:${email}" class="text-gray-600 hover:text-blue-700 break-all">${email}</a>
                    </div>
                </div>`;
        }
        if (phone) {
            contactHtml += `
                <div class="flex items-center animate-fade-in delay-100">
                    <div class="bg-indigo-100 p-3 rounded-full mr-4"><i class="fas fa-phone text-xl text-indigo-600"></i></div>
                    <div>
                        <h4 class="font-medium text-gray-800">Mobile</h4>
                        <p class="text-gray-600">${phone}</p>
                    </div>
                </div>`;
        }
        if (address) {
            contactHtml += `
                <div class="flex items-start animate-fade-in delay-200">
                    <div class="bg-green-100 p-3 rounded-full mr-4"><i class="fas fa-map-marker-alt text-xl text-green-600"></i></div>
                    <div>
                        <h4 class="font-medium text-gray-800">Address</h4>
                        <p class="text-gray-600">${address}</p>
                    </div>
                </div>`;
        }
        contactInfoContainer.innerHTML = contactHtml;
    }
    
    const socialLinksContactContainer = document.getElementById('social-links-contact');
    if (socialLinksContactContainer && personalInfo.socialLinks) {
        personalInfo.socialLinks.forEach(link => {
            socialLinksContactContainer.innerHTML += `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110" aria-label="${link.name}">
                    <i class="${link.icon} text-2xl"></i>
                </a>`;
        });
    }

    // Populate Navigation Menus
    const navMenuUl = document.querySelector('#nav-menu ul');
    const mobileMenuUl = document.querySelector('#mobile-menu ul');
    if (navigation && navMenuUl && mobileMenuUl) {
        navigation.forEach(item => {
            navMenuUl.innerHTML += `
                <li><a href="#${item.id}" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">${item.name}</a></li>`;
            mobileMenuUl.innerHTML += `
                <li><a href="#${item.id}" class="block py-2 px-3 rounded hover:bg-gray-100 text-gray-700 font-medium transition-colors">${item.name}</a></li>`;
        });
    }
    
    // Populate Footer Links
    const footerLinksContainer = document.getElementById('footer-links');
    if (footerLinksContainer && navigation) {
        navigation.slice(0, 4).forEach(item => {
             footerLinksContainer.innerHTML += `<a href="#${item.id}" class="text-gray-400 hover:text-white transition-colors text-sm">${item.name}</a>`;
        });
    }
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Event Listeners & UI Enhancements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.querySelector('i').classList.toggle('fa-bars');
            mobileMenuButton.querySelector('i').classList.toggle('fa-times');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.querySelector('i').classList.remove('fa-times');
                mobileMenuButton.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === "#") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const header = document.getElementById('header');
    if(header){
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                header.classList.add('py-3', 'shadow-lg');
                header.classList.remove('py-4');
            } else {
                header.classList.add('py-4');
                header.classList.remove('py-3', 'shadow-lg');
            }
        });
    }

    const animatedElements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});