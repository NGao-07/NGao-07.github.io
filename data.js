// data.js
const cvData = {
    personalInfo: {
        name: "Ning GAO",
        title: "Ph.D. Candidate in Medical Physics",
        affiliation: "University of Science and Technology of China (USTC)",
        introBlurb: "I am a Ph.D. candidate in Medical Physics at USTC, passionate about leveraging cutting-edge technology to improve healthcare. My research focuses on the intersection of deep learning, quality assurance in radiotherapy, radiation detectors, and exploring the potential of Large Language Models in medical applications.",
        detailedAbout: `
            <p class="mb-4 text-lg text-gray-700">I am currently pursuing my Ph.D. in Medical Physics at the esteemed University of Science and Technology of China (USTC). My academic journey began with a B.S. in Nuclear Engineering and Technology from Harbin Engineering University, which laid a strong foundation for my current research pursuits.</p>
            <p class="mb-4 text-lg text-gray-700">My primary motivation is to contribute to advancements in medical treatment through innovative technological solutions. I am particularly fascinated by the potential of artificial intelligence and sophisticated detection systems to enhance the precision and safety of radiotherapy procedures.</p>
            <h4 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Core Research Areas:</h4>
        `,
        researchInterests: [
            { name: "Deep Learning", description: "Applying neural networks for tasks like image segmentation, dose prediction, and anomaly detection in medical imaging and radiotherapy." },
            { name: "Quality Assurance in Radiotherapy", description: "Developing novel methods and tools to ensure the accuracy and safety of radiation treatments, including EPID-based in-vivo dosimetry." },
            { name: "Radiation Detectors", description: "Investigating and developing advanced detector technologies, such as flexible scintillators, for improved radiation measurement and imaging." },
            { name: "Large Language Models (LLMs)", description: "Exploring applications of LLMs in medical physics for tasks like information retrieval, report generation, or enhancing clinical workflows." }
        ],
        pictureUrl: "assets/my_photo.jpg",
        contact: {
            email: "gn8022@mail.ustc.edu.cn",
            phone: "(86) 18555689295",
            address: "No. 96 Jinzhai Road, USTC, Hefei, Anhui, 230026, China"
        },
        socialLinks: [
            { name: "Email", icon: "fas fa-envelope", url: "mailto:gn8022@mail.ustc.edu.cn" },
            { name: "Google Scholar", icon: "fas fa-graduation-cap", url: "#" },
            { name: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
            { name: "GitHub", icon: "fab fa-github", url: "#" }
        ]
    },
    navigation: [ // "Notepad" removed from here
        { name: "Home", id: "hero" },
        { name: "Research", id: "research-experience" },
        { name: "Publications", id: "publications" },
        { name: "News & Awards", id: "news-rewards" },
        { name: "Contact", id: "contact" }
    ],
    education: [
        { degree: "M.S., Ph.D. Candidate in Nuclear Science and Technology (Medical Physics focus)", institution: "University of Science and Technology of China (USTC), Hefei", period: "Sep 2020 - Jun 2025 (anticipated)", description: "Advisor: Prof. X. George Xu", tags: ["Medical Physics", "USTC"] },
        { degree: "B.S. in Nuclear Engineering and Technology", institution: "Harbin Engineering University (HEU), Harbin", period: "Aug 2016 - Jul 2020", description: "", tags: ["Nuclear Engineering", "HEU"] }
    ],
    researchExperience: [
        { title: "EPID-Based In Vivo Dosimetry", company: "USTC (Leader)", period: "Sep 2023 - Present", description: "Combining Fast Monte Carlo (Archer) and Deep Learning. Key achievements: >90% gamma pass rate (3%/3mm), AI denoising (SSIM ~60% to ~99%), ~0.3s 3D dose reconstruction via CNNs. Submitted to PMB, AAPM2024 Oral & Blue Ribbon Poster.", tags: ["Monte Carlo", "Deep Learning", "EPID", "Radiotherapy QA", "Python", "Archer"] },
        { title: "Flexible Radiation Detectors Development", company: "USTC (Leader)", period: "Sep 2023 - Present", description: "For patient-specific in-vivo dosimetry. Investigated optimal detector spacing (~1mm). Fabricated GOS scintillator/SiPM flexible detectors with Bluetooth. Characterized under LINAC (good linearity, dose rate independence). AAPM2024 Oral.", tags: ["Detector Development", "Scintillators", "Dosimetry", "Monte Carlo"] },
        { title: "Superficial Radiotherapy System Development", company: "USTC", period: "Sep 2023 - Present", description: "Contributing to the design and testing of a novel system for superficial treatments.", tags: ["Radiotherapy Systems", "Hardware Design"] },
        { title: "Radiotherapy Risk Evaluation", company: "USTC", period: "Oct 2020 – Jul 2022", description: "Calculated NTCP (LKB model) and secondary cancer risk (BEIR VII) using Archer and DeepContour.", tags: ["NTCP", "Risk Assessment", "Monte Carlo", "Auto-segmentation"] },
        { title: "CBCT Scattering Correction", company: "USTC", period: "Sep 2021 – Jul 2022", description: "Modeled CBCT scanners in Archer. Developed MC-based scatter correction and FBP reconstruction.", tags: ["CBCT", "Image Reconstruction", "Monte Carlo", "Scattering Correction"] }
    ],
    publications: {
        journalPapers: [
            { title: "Feasibility of reconstructing in-vivo patient 3D dose distributions from 2D EPID image data using convolutional neural networks", journal: "Physics in Medicine and Biology 70 015018", year: "2025", authors: "Gao N, et al.", link: "#", description: "Demonstrated CNN-based 3D dose reconstruction from EPID data." },
            { title: "A new GPU-based Monte Carlo code for helium ions therapy", journal: "Strahlentherapie und Onkologie", year: "Accepted", authors: "Li S, Gao N, et al.", link: "#", description: "Details a novel MC code for helium ion therapy simulations." },
            { title: "A bulk Schottky junction for high-sensitivity portable radiation detectors", journal: "Nature Communications 15, 10311", year: "2024", authors: "Zhang Y, Huang Z, Peng C, Gao N, et al.", link: "https://www.nature.com/articles/s41467-024-45000-w", description: "Introduces a high-sensitivity radiation detector design." },
        ],
        conferenceAbstracts: [
            { title: "A novel flexible scintillator dosimeter for high-energy radiotherapy: fabrication and characterization", conference: "AAPM 66th Annual Meeting", year: "2024 (Oral)", authors: "Gao N, et al.", link: "#", description: "Presented fabrication and characterization of a flexible dosimeter." },
            { title: "Using real-time Monte Carlo dose computing and EPID data to reconstruct patient 3D dose distributions for radiotherapy QA", conference: "AAPM 66th Annual Meeting", year: "2024 (Blue Ribbon Poster)", authors: "Gao N, et al.", link: "#", description: "Showcased a method for 3D dose reconstruction using MC and EPID." },
        ],
        patents: [
            { title: "A flexible X-ray radiation measurement device for radiotherapy", id_date: "Chinese patent No. CN115480282A", year: "Sep 2022", authors: "Xu XG, Gao N, et al.", link: "#", description: "Patent for a flexible radiation measurement device." }
        ]
    },
    news: [
        { date: "July 2024", content: "Presenting two research projects (one oral, one blue ribbon poster) at the AAPM 66th Annual Meeting in Los Angeles, CA.", icon: "fas fa-bullhorn" },
        { date: "2024", content: "Co-authored paper 'A bulk Schottky junction...' published in Nature Communications.", icon: "fas fa-newspaper" },
        { date: "2025 (Ant.)", content: "Lead-authored paper on EPID-based 3D dose reconstruction accepted in Physics in Medicine and Biology.", icon: "fas fa-file-alt" }
    ],
    rewards: [
        { name: "First Prize, Graduate Scholarship", institution: "USTC", year: "2020-2023", icon: "fas fa-award" },
        { name: "AAPM Blue Ribbon Poster", institution: "AAPM 66th Annual Meeting", year: "2024", icon: "fas fa-medal" }
    ],
    logoText: "Ning GAO"
};