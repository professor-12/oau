import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"
import { Poppins, Montserrat } from "next/font/google"
import { DESCRIPTION_META } from "@/constants";


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
        description: DESCRIPTION_META,

    }
};



const grosek = localFont({ src: './fonts/grosek.woff2', variable: '--font-grosek' })
//  New fonts


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
