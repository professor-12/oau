import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const robotoslab = localFont({
    src: "./fonts/RobotoSlab-Black.ttf",
    variable: "--font-roboto-slab",
    weight: "100 600",
});
const Inter = localFont({
    src: "./fonts/Inter.woff2",
    variable: "--font-inter",
    weight: "100 900",
});

const abrilfatface = localFont({
    src: "./fonts/AbrilFatface-Regular.ttf",
    variable: "--font-abril",
    weight: "100 900",
});

const interVariable = localFont({
    src: "./fonts/InterVariable.woff2",
    variable: "--font-inter-var",
    weight: "100  900",
});
export const metadata: Metadata = {
    title: {
        default: "Obafemi Awolowo",
        template: "%s | Obafemi Awolowo UNiversity",
    },
    description:
        "Obafemi Awolowo University, Ile-Ife is one of three Universities established in Nigeria between 1961 and 1962",
};

const quicksand = localFont({
    src: "./fonts/Quicksand-Regular.ttf",
    variable: "--font-quicksand",
    weight: "100 500",
});
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    console.log(interVariable.variable);
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${interVariable.variable} ${quicksand.variable} ${Inter.variable} ${abrilfatface.variable}   ${robotoslab.variable}  ${geistMono.variable} antialiased `}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
