"use client";
import { useEffect } from "react";

const useAnimationOnView = (
      ref: React.RefObject<Element>,
      executeFn: () => void,
      threshold: number = 0.1
) => {
      useEffect(() => {
            if (!ref?.current) return;
            const observer = new IntersectionObserver(
                  (entries) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                    executeFn();
                              }
                        });
                  }
            );

            const target = ref.current;
            observer.observe(target);

            return () => {
                  observer.unobserve(target);
            };
      }, [ref, executeFn, threshold]);
};

export default useAnimationOnView;
