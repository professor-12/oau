import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#130131",
                muted: "#344054",
            },
            fontFamily: {
                quicksand: ["var(--font-quicksand)", "sans-serif"],
                poppins: ["var(--font-poppins)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
