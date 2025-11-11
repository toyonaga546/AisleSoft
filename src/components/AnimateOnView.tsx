import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
};

export const AnimateOnView: React.FC<Props> = ({ children, className = "", rootMargin = "0px", threshold = 0.15 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={`${className} ${visible ? "animate-entrance" : "opacity-0"}`}>
      {children}
    </div>
  );
};

export default AnimateOnView;
