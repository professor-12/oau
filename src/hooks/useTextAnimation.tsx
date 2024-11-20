import { useEffect, useState } from "react";



const useTextAnimation = (text: Array<string>, delay?: number) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                return (prev + 1) % text.length
            });
        }, delay ?? 3500);

        return () => clearInterval(interval);
    }, [delay, text.length]);

    return text[index];
};

export default useTextAnimation;
