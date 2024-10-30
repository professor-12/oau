import { useEffect, useState } from "react";

export const listofWords = [
    "Learning and Culture",
    "Africa's most beautiful Campus",
    "Great Citadel of Learning",
    "Gateway to the University",
];

const useTextAnimation = (text: Array<string>, delay?: number) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev >= text.length - 1) return 0;
                return prev + 1;
            });
        }, delay ?? 4000);

        return () => clearInterval(interval);
    }, [delay, text.length]);

    return text[index];
};

export default useTextAnimation;
