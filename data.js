// data.js

const cvData = {
    personalInfo: {
        name: "Ning GAO",
        title: "Ph.D. Candidate in Medical Physics",
        affiliation: "University of Science and Technology of China (USTC)",
        address: "No. 96 Jinzhai Road, USTC, Hefei, Anhui Province, 230026, China",
        email: "gn8022@mail.ustc.edu.cn",
        mobile: "(86) 18555689295",
        pictureUrl: "assets/placeholder_profile.jpg", // <-- IMPORTANT: Replace with your actual photo path
        cvUrl: "assets/Ning_Gao_CV.pdf",          // <-- IMPORTANT: Place your CV PDF here and update path if needed
        googleScholarUrl: "#", // <-- IMPORTANT: Add your Google Scholar link
        linkedInUrl: "#",      // <-- IMPORTANT: Add your LinkedIn link
        githubUrl: "#",        // <-- IMPORTANT: Add your GitHub link (if any)
        introBlurb: "I am a Ph.D. candidate in Medical Physics at the University of Science and Technology of China (USTC), passionate about leveraging cutting-edge technology to improve healthcare. My research focuses on the intersection of deep learning, quality assurance in radiotherapy, radiation detectors, and exploring the potential of Large Language Models in medical applications.",
        researchInterests: [
            {
                name: "Deep Learning",
                description: "Applying neural networks for tasks like image segmentation, dose prediction, and anomaly detection in medical imaging and radiotherapy."
            },
            {
                name: "Quality Assurance in Radiotherapy",
                description: "Developing novel methods and tools to ensure the accuracy and safety of radiation treatments, including EPID-based in-vivo dosimetry."
            },
            {
                name: "Radiation Detectors",
                description: "Investigating and developing advanced detector technologies, such as flexible scintillators, for improved radiation measurement and imaging."
            },
            {
                name: "Large Language Models (LLMs)",
                description: "Exploring applications of LLMs in medical physics for tasks like information retrieval, report generation, or enhancing clinical workflows."
            }
        ]
    },
    education: [
        {
            degree: "M.S., Ph.D. Candidate in Nuclear Science and Technology (Medical Physics focus)",
            institution: "University of Science and Technology of China (USTC), Hefei, China",
            period: "Sep 2020 - Jun 2025 (anticipated)",
            advisor: "Thesis Advisor: X. George Xu, Ph.D., Chair Professor and Director, Institute of Nuclear Medical Physics, USTC"
        },
        {
            degree: "B.S. in Nuclear Engineering and Technology",
            institution: "Harbin Engineering University (HEU), Harbin, China",
            period: "Aug 2016 - Jul 2020"
        }
    ],
    researchExperience: [
        {
            title: "EPID-Based In Vivo Dosimetry Combining Fast Monte Carlo Algorithms and Deep Learning",
            role_period: "Leader, Sep 2023 - Present",
            details: [
                "Conducted EPID imaging simulations using GPU-based Monte Carlo codes (Archer). Gamma passing rate between simulated and measured EPID images above 90% (3%/3mm). AAPM2024 oral presentation.",
                "Implemented AI denoising techniques to enhance the quality of EPID images. Simulated 1e6 particles, achieving image quality comparable to 1e8 particles through denoising. Structural Similarity Index (SSIM) improved from ~60% to ~99%.",
                "Developed a fast iterative algorithm for reconstructing 3D dose distributions within patients (ongoing).",
                "Performed direct 3D dose reconstruction from 2D EPID images using convolutional neural networks (CNNs) ~ 0.3s."
            ],
            mentions: ["AAPM blue ribbon poster", "submitted to Physics in Medicine & Biology"]
        },
        {
            title: "Development of Flexible Radiation Detectors for Patient-Specific In Vivo Dosimetry in Radiotherapy",
            role_period: "Leader, Sep 2023 - Present",
            details: [
                "Investigated optimal detector spacing size for 3D reconstruction using Monte Carlo simulations (~1mm).",
                "Fabricated flexible radiation detectors utilizing GOS scintillator film and silicon photon detector arrays; Integrated Bluetooth for real-time data transmission.",
                "Conducted dosimetry characterization under high-energy medical linear accelerators, demonstrating good dose linearity, dose rate independence, and stability.",
                "Developed a 3D dose reconstruction algorithm from measurements of the flexible detector."
            ],
            mentions: ["AAPM2024 oral presentation"]
        },
        {
            title: "Development of superficial radiotherapy system",
            role_period: "Sep 2023 - Present",
            details: [
                "Involved in the design and testing of a novel superficial radiotherapy system for treating skin cancers and other surface lesions."
            ],
            mentions: []
        },
        {
            title: "Risk Evaluation of Complications and Secondary Cancer in Radiotherapy",
            role_period: "Oct 2020 – Jul 2022",
            details: [
                "Performed dose calculations and automatic contouring using Archer and DeepContour, respectively.",
                "Calculated Normal Tissue Complication Probability (NTCP) using the Lyman-Kutcher-Burman (LKB) model.",
                "Assessed secondary cancer risk based on BEIR VII data."
            ],
            mentions: []
        },
        {
            title: "Scattering correction of Cone Beam CT Images Based on Monte Carlo Simulations",
            role_period: "Sep 2021 – Jul 2022",
            details: [
                "Modeled Cone Beam CT scanners and kV imagers in Archer for imaging simulations and dose calculations.",
                "Developed a Monte Carlo-based scattering correction algorithm to mitigate the effects of scatter radiation.",
                "Performed 3D reconstruction of Cone Beam CT images using the filtered back projection (FBP) algorithm."
            ],
            mentions: []
        }
    ],
    publications: {
        journalPapers: [
            { authors: "Gao N, et al.", title: "Feasibility of reconstructing in-vivo patient 3D dose distributions from 2D EPID image data using convolutional neural networks.", journal: "Physics in Medicine and Biology 70 015018 (2025)", link: "#" }, // <-- Add DOI link
            { authors: "Li S, Gao N, et al.", title: "A new GPU-based Monte Carlo code for helium ions therapy.", journal: "Strahlentherapie und Onkologie (Accepted)", link: "#" },
            { authors: "Zhang Y, Huang Z, Peng C, Gao N, et al.", title: "A bulk Schottky junction for high-sensitivity portable radiation detectors.", journal: "Nature Communications 15, 10311 (2024)", link: "https://www.nature.com/articles/s41467-024-45000-w" }, // Example link
            { authors: "Peng Z, Gao N, et al.", title: "A Review of computational phantoms for quality assurance in radiology and radiotherapy in the deep-learning era.", journal: "Journal of Radiation Protection and Research 47: 111–133 (2022)", link: "#" },
            { authors: "Li S, Gao N, et al.", title: "Development of a fast Monte Carlo dose verification module for helical tomotherapy.", journal: "Chinese Journal of Medical Physics 41(11):1321-1326 (2024)", link: "#" },
            { authors: "Qiu T, Gao N, et al.", title: "Feasibility of establishing a whole-body organ dose database for radiotherapy using automatic segmentation and fast Monte Carlo calculation.", journal: "Chinese Journal of Medical Physics 39(11): 1339-44 (2022)", link: "#" },
            { authors: "Qi Y, Gao N, et al.", title: "Research progresses of Flash radiotherapy technique.", journal: "Chinese Journal of Medical Imaging technology 38(01): 146-9 (2022)", link: "#" }
        ],
        conferenceAbstracts: [
            { authors: "Gao N, et al.", title: "A novel flexible scintillator dosimeter for high-energy radiotherapy: fabrication and characterization.", conference: "The 66th Annual Meeting & Exhibition of the American Association of Physicists in Medicine (AAPM), Los Angeles, CA, July 21-25, 2024. (Oral)", link: "#" },
            { authors: "Gao N, et al.", title: "Using real-time Monte Carlo dose computing and EPID data to reconstruct patient 3D dose distributions for radiotherapy QA.", conference: "The 66th Annual Meeting & Exhibition of the American Association of Physicists in Medicine (AAPM), Los Angeles, CA, July 21-25, 2024. (Blue Ribbon Poster)", link: "#" },
            { authors: "Cheng B, Zhang K, Gao N, et al.", title: "A Monte Carlo-based in-vivo QA method with EPID transit dosimetry.", conference: "The 66th Annual Meeting & Exhibition of the American Association of Physicists in Medicine (AAPM), Los Angeles, CA, July 21-25, 2024. (Oral, presenter)", link: "#" },
            { authors: "Gao N, et al.", title: "A fast Monte Carlo tool for scatter correction of cone-beam CT for adaptive radiotherapy.", conference: "IEEE International Conference on Medical Imaging Physics and Engineering (Oral)", link: "#" }
        ],
        patents: [
            { inventors: "Xu XG, Gao N, et al.", title: "A flexible X-ray radiation measurement device for radiotherapy.", id_date: "Chinese patent No. CN115480282A (Sep 2022)", link: "#" }
        ]
    },
    rewards: [ // Combined Scholarships & Honors
        { year: "2020, 2021, 2022, 2023", name: "First Prize, Graduate Scholarship", institution: "USTC" },
        { year: "2024", name: "Second Prize, Graduate Scholarship", institution: "USTC" },
        { year: "2024", name: "Blue Ribbon Poster", institution: "AAPM 66th Annual Meeting" } // Example, derived from abstract
    ],
    news: [ // Manually curated news items (can be derived from other sections)
        { date: "July 2024", content: "Presenting two research projects (one oral, one blue ribbon poster) at the AAPM 66th Annual Meeting in Los Angeles, CA." },
        { date: "2024", content: "Co-authored paper 'A bulk Schottky junction for high-sensitivity portable radiation detectors' published in Nature Communications." },
        { date: "2025 (Anticipated)", content: "Lead-authored paper 'Feasibility of reconstructing in-vivo patient 3D dose distributions from 2D EPID image data using convolutional neural networks' to be published in Physics in Medicine and Biology."}
        // Add more news items here
    ],
    leadershipActivities: [
        {
            role: "Teaching Assistant, Radiation Oncology and Frontiers",
            organization: "USTC",
            period: "Fall Term 2022, 2023, 2024",
            details: ["Course material preparation, student guidance, assignment correction, and question answering."]
        },
        {
            role: "Clinical Intern (Medical Physicist)",
            organization: "Department of Radiation Oncology, First Affiliated Hospital of Anhui Medical University",
            period: "Dec 2021",
            details: ["Treatment planning, patient positioning, quality assurance, and calibration of radiation equipment."]
        },
        {
            role: "Monitor, College of Nuclear Science and Technology",
            organization: "HEU",
            period: "Sep 2017 – Jul 2020",
            details: ["Student engagement, academic support, event organization, and liaison between students and faculty."]
        }
    ],
    skills: {
        programming: ["Python", "C++"],
        monteCarlo: ["ARCHER", "TOPAS", "MCNP", "GEANT4"],
        radiationOncology: {
            "Linear Accelerator": ["Varian"],
            "QA Equipment": ["Ionization chamber (PTW, IBA)", "ArcCHECK (PTW)", "TLD", "MatriXX (IBA)"],
            "Software": ["TPS Eclipse and R&V Aria (Varian)"]
        },
        radiology: {
            "Hardware": ["X-ray tube (Varex imaging)", "Imager (Varex imaging, i-Ray)"],
            "Techniques": ["CT images reconstruction (FBP)"],
            "Safety": ["Radiation protection"]
        },
        languages: ["English (Fluent)", "Chinese (Mother tongue)"]
    },
    notepadContent: "This is a space for my current thoughts, quick notes on interesting papers, or snippets of ideas. Content coming soon!",
    references: [ // Optional: usually provided upon request, but can be listed if desired
        {
            name: "Prof. X. George Xu",
            email: "xgxu@ustc.edu.cn",
            mobile: "(86) 13965079248",
            titles: [
                "Chair Professor, Director of the Institute of Nuclear Medical Physics, USTC",
                "Joint appointment with School of Nuclear Science and Technology; Department of Radiation Oncology, the First Affiliated Hospital, USTC",
                "AAPM and AIMBE Fellow, AAPM Quimby Distinguished Career Award Recipient (2020)",
                "Formerly, Hood Endowed Chair Professor of Engineering, Rensselaer Polytechnic Institute (Troy, New York, USA)"
            ]
        }
        // Add more references if needed
    ]
};