export const listofWords = [
    "Learning and Culture",
    "Africa's most beautiful Campus",
    "Great Citadel of Learning",
    "Gateway to the University",
];

export const footerLink = [
    {
        title: "Students",
        children: [
            { name: "Undergraduate", links: "/login/undergraduate" },
            { name: "Postgraduate", links: "/login/postgraduate" },
            { name: "Executive mba", links: "/login/mbalogin" },
        ],
    },
    {
        title: "Staff",
        children: [
            { name: "Staff Login", links: "/login/staff" },
            { name: "Bursary", links: "/login/bursary" },
        ],
    },
    {
        title: "Other Links",
        children: [
            { name: "Transcript", links: "/login/undergradaute" },
            {
                name: "Diploma",
                links: "http://eportal.oauife.edu.ng/advertnformlgsdiploma.pdf",
            },
            {
                name: "Change of course form",
                links: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
            {
                name: "Computer Training",
                links: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
            {
                name: "Medical Services",
                links: "/health-center",
            },
            {
                name: "Fill PG Starter form",
                links: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
        ],
    },
    {
        title: "Admission (undergraduate)",
        children: [
            {
                name: "Newly Admiatted Student Login",
                links: "/login/undergraduate",
            },
            {
                name: "Rules and regualtion for accomodation in hall of residence",
                links: "http://eportal.oauife.edu.ng/Basic-Rules-and-Regulations-for-Accommodation.pdf",
            },
        ],
    },
] as const;

export const faq = [
    {
        question:
            "When Will the Application (Online Registration) for Post UTME Be Out?",
        answer: "Monday, 5th August, 2024.",
    },
    {
        question: " How Do I Change My Institution/Course?",
        answer: " JAMB handles this. Please visit the website of JAMB for further details.",
    },
    {
        question:
            "I Scored Less Than 200 In JAMB; Can I Apply Since National Cut-Off Is 120?",
        answer: "No, OAU Ile-Ife cut-off mark remains 200.",
    },
    {
        question:
            "Will The Post UTME Screening Be Based On the Subjects We Did in Our Jamb Exam or Not?",
        answer: "The Screening exercise will include, but is not limited to the UTME subjects.",
    },
    {
        question: "What Kind of Credentials Exactly are we to Have?",
        answer: "O’ Level",
    },
    {
        question: `Please in Order to Prepare for the Post UTME Screening, Which Subject Should I be Studying as a Direct Entry Candidate?`,
        answer: `Direct Entry students won’t write the CBT Screening test; however, they are required to register and will be screened Online.`,
    },
    {
        question:
            "Are Direct Entry (DE) Required to forward their Transcript to the Registrar of the institution?",
        answer: "Yes, DE Candidates are expected to forward their transcripts.",
    },
] as const;

export const studyAtOau = [
    {
        image: "/oautrends.jpg",
        link: "https://oauife.edu.ng/students/",
        title: "Undergraduate Admissions",
        body: "Whatever you want from your University experience, you will find it at Obafemi Awolowo University.Learn more about our Undergraduate Program.",
    },
    {
        image: "/oauimage.jpeg",
        title: "Graduate Admissions",
        link: "https://oauife.edu.ng/admission-postgraduate-studies/",
        body: "Ready to prepare for professional life, boost your career, push yourself to new frontiers of knowledge by enrolling in any of our Postgraduate Programs.",
    },
    {
        image: "/student-10-480x299.jpg",
        link: "http://oaucdl.edu.ng/",
        title: "Continuing Education",
        body: "We strive to reach out to diverse populations and varying student profiles with challenging, and rewarding programs to enhance employability and professionalism.",
    },
];

export const navlinks = [
    {
        title: "Students",
        links: [
            { name: "Undergraduate", url: "/login/undergraduate" },
            { name: "Post graduate", url: "/login/postgraduate" },
            { name: "Executive MBA", url: "/login/mbalogin" },
        ],
    },
    {
        title: "Staff",
        links: [
            {
                name: "Staff Login",
                url: "/login/staff",
            },
            { name: "Bursary", url: "bursary" },
        ],
    },
    {
        title: "Quick Links",
        links: [
            {
                name: "FAQ",
                url: "/home/#faq",
            },
            { name: "Transcript", url: "/login/undergradaute" },
            {
                name: "Diploma",
                url: "http://eportal.oauife.edu.ng/advertnformlgsdiploma.pdf",
            },
            {
                name: "Change of course form",
                url: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
            {
                name: "Computer Training",
                url: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
            {
                name: "Medical Services",
                url: "/health-center",
            },
            {
                name: "Fill PG Starter form",
                url: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
        ],
    },
] as const;
