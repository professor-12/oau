import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"
import { Poppins, Montserrat } from "next/font/google"


const poppins = Poppins({ weight: '400', subsets: ["latin"], variable: '--font-poppins' })

const Inter = localFont({
    src: "./fonts/Inter.woff2",
    variable: "--font-inter",
    weight: "300 600",
});



const montserrat = Montserrat({ weight: "500", variable: '--font-monserat', subsets: ["latin"] })

const quicksand = localFont({
    src: "./fonts/Quicksand-Regular.ttf",
    variable: "--font-quicksand",
    weight: "300 900",
});

export const metadata: Metadata = {
    title: {
        default: "Obafemi Awolowo",
        template: "%s | Obafemi Awolowo University",
    },
    description:
        "Obafemi Awolowo University, Ile-Ife is one of three Universities established in Nigeria between 1961 and 1962",
    openGraph: {
        type: "website",
        title: "Obafemi Awolowo University",
        description: `News and Events edit post Events OAU VC PRESENTS 2024 BATCH-2 PATENT CERTIFICATES TO RESEARCHERS ON OCTOBER 2, 2024. October 15, 2024 Facebook Twitter Linked In E-mail The Director of the Intellectual Property and Technology Transfer Office (IPTTO), Prof. Grace Ogunlusi welcomed the Principal Officers of the&#8230; Read more edit post OBAFEMI AWOLOWO WINS MULTI-MILLION NAIRA FRENCH EMBASSY AWARD FOR PLASTIC RECYCLING October 15, 2024 Facebook Twitter Linked In E-mail edit post 388th Inaugural Lecture: Prof Martina Abebi Olubayo-Fatiregun October 10, 2024 Facebook Twitter Linked In E-mail edit post 387th Inaugural Lecture: Professor Taiwo Akanbi Olaiya October 7, 2024 Facebook Twitter Linked In E-mail edit post INAUGURATION AND SENSITISATION OF STAKEHOLDERS ON CAREER SERVICES DELIVERY October 3, 2024 Facebook Twitter Linked In E-mail Load More Research and Innovation NRF TETFUND 2024 Call For Concept Notes August 9, 2024 Facebook Twitter Linked In E-mail The 2024 Mega Innovative Bootcamp: A Showcase of Youth Research Facilitators&#8217; Skills and Innovation July 17, 2024 Facebook Twitter Linked In E-mail OAU Research Fair Presents Showcasing And Celebrating The Diverse Research Activities Across Our Institution. July 27, 2024 Facebook Twitter Linked In E-mail OAU Institute For Entrepreneurship And Development Studies(IFEDS) Annual International Conference July 15, 2024 Facebook Twitter Linked In E-mail Load More Trending Videos on OAU YouTube Currently Playing PROFESSOR TAIWO AKANBI OLAIYA (PROFESSOR OF PUBLIC ADMINISTRATION) - 387TH INAUGURAL LECTURE PROFESSOR TAIWO AKANBI OLAIYA (PROFESSOR OF PUBLIC ADMINISTRATION) - 387TH INAUGURAL LECTURE 01:00:38 386TH INAUGURAL LECTURE TITLED: EXPLORING EARTH AND SPACE FOR THE BENEFITS OF MANKIND 01:07:22 PROF THEODORA OLUFUNKE BELLO (PROFESSOR OF SCIENCE EDUCATION (PHYSICS)) - 385TH Inaugural Lecture 00:56:28 CELEBRATING EXCELLENCE IN RESEARCH PRACTICE - PROF. YUSUF ALI (SAN) 05:29:41 PROF. TEMITOPE A. ESAN (B.ChD, MD, PhD, FMCDS) - PROF. OF PROSTHODONTICS: 383RD INAUGURAL LECTURE 00:58:51 Professor Babaniyi Babatope (Professor of Materials Science) - 384TH INAUGURAL LECTURE 01:13:26 Documentary on the History of the University of Ife, now Obafemi Awolowo University, Ile-Ife 00:18:32 Prof. Foluso John Owotade&#8217;s Inaugural Lecture 01:03:13 Professor Babaniyi Babatope (Professor of Materials Science) - 384TH INAUGURAL LECTURE 01:13:26 Professor Morenike Oluwatoyin Ukpong 382nd Inaugural Lecture 01:03:15 Professor JACOB A. SONIBARE 379th Inaugural Lecture 01:03:12 edit post Events OAU VC PRESENTS 2024 BATCH-2 PATENT CERTIFICATES TO RESEARCHERS ON OCTOBER 2, 2024. October 15, 2024 edit post Events OBAFEMI AWOLOWO WINS MULTI-MILLION NAIRA FRENCH EMBASSY AWARD FOR PLASTIC RECYCLING October 15, 2024 edit post Events 388th Inaugural Lecture: Prof Martina Abebi Olubayo-Fatiregun October 10, 2024 edit post Events 387th Inaugural Lecture: Professor Taiwo Akanbi Olaiya October 7, 2024 edit post Events INAUGURATION AND SENSITISATION OF STAKEHOLDERS ON CAREER SERVICES DELIVERY October 3, 2024 TRENDING IN OAU News and Event Compliment to Professor Olusanjo Matthew Abayomi DARAMOLA on His Induction as a Fellow of the Nigerian Academy of Letters August 15, 2024 Facebook Twitter Linked In E-mail GOVERNANCE AND PUBLIC ADMINISTRATION IN NIGERIA/AFRICA July 9, 2024 Facebook Twitter Linked In E-mail Strategic Engagement for Advancing Agricultural Research: The DANIDA Project Team&#8217;s Courtesy Visit to the Central Office of Research June 21, 2024 Facebook Twitter Linked In E-mail Biorisk Management Training at the Obafemi Awolowo University, Ile-Ife, Nigeria June 21, 2024 Facebook Twitter Linked In E-mail Students of the Obafemi Awolowo University Make Impact At The 2024 Mega Designathon: Innovative Youth Solutions for Health Promotion May 30, 2024 Facebook Twitter Linked In E-mail A Video Documentary on the History of the University of Ife, now Obafemi Awolowo University, Ile-Ife. May 27, 2024 Facebook Twitter Linked In E-mail OAU Office Of The Provost Postgraduate College Disclaimer May 24, 2024 Facebook Twitter Linked In E-mail OAU Don elected as the Western Africa Representative of Union for African Population Studies May 24, 2024 Facebook Twitter Linked In E-mail Preserving the Legacy: The Architectural Heritage of Obafemi Awolowo University, Africa’s most beautiful campus May 8, 2024 Facebook Twitter Linked In E-mail OAU Radio Station - GREAT FM 94.5 – now available ONLINE May 8, 2024 Facebook Twitter Linked In E-mail View more Research News NRF TETFUND 2024 Call For Concept Notes August 9, 2024 Facebook Twitter Linked In E-mail The 2024 Mega Innovative Bootcamp: A Showcase of Youth Research Facilitators&#8217; Skills and Innovation July 17, 2024 Facebook Twitter Linked In E-mail OAU Research Fair Presents Showcasing And Celebrating The Diverse Research Activities Across Our Institution. July 27, 2024 Facebook Twitter Linked In E-mail Insights from the ARUA Workshop for Data Teams: Enhancing Data Management at the Obafemi Awolowo University, Ile-Ife July 8, 2024 Facebook Twitter Linked In E-mail Research Capacity Building at Obafemi Awolowo University: Exploring the Secondary Use of Data June 28, 2024 Facebook Twitter Linked In E-mail Obafemi Awolowo University Hosts West Africa Hub for Feed the Horticulture Innovation Project June 27, 2024 Facebook Twitter Linked In E-mail TETFUND Project Inception Meeting: Advancing Political Inclusion for Persons with Disabilities in Nigeria June 28, 2024 Facebook Twitter Linked In E-mail Obafemi Awolowo University Gearing Up to Institute Systems and Structure to Prevent and Address Research Misconduct June 27, 2024 Facebook Twitter Linked In E-mail Fostering Research Integrity: A Successful Institutional Training on Responsible Conduct of Research June 22, 2024 Facebook Twitter Linked In E-mail View more Studying at OAU Undergraduate Admissions Whatever you want from your University experience, you will find it at Obafemi Awolowo University. Learn more about our Undergraduate Program. Undergraduate Studies Graduate Admissions Ready to prepare for professional life, boost your career, push yourself to new frontiers of knowledge by enrolling in any of our Postgraduate Programs. Postgraduate Studies Continuing Education We strive to reach out to diverse populations and varying student profiles with challenging, and rewarding programs to enhance employability and professionalism. Pre-Degree and Developmental Programs 0 COLLEGES 0 FACULTIES 0 DEPARTMENTS 0 RESEARCH CENTERS 0 STUDENTS Watch a Virtual Tour of Our Landscape and Scenery`,

    },

};



const grosek = localFont({ src: './fonts/grosek.woff2', variable: '--font-grosek' })
//  New fonts




console.log()

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${quicksand.variable} ${poppins.variable} ${montserrat.variable}   ${Inter.variable} ${grosek.variable} antialiased `}
            >
                {children}
                <div id="portal"></div>
            </body>
        </html>
    );
}
