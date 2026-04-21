import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const String = () => {
  const pathRef = useRef(null);
  const [stringX, setStringX] = useState(50);
  const [stringY, setStringY] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Convert mouse position into 0–100 SVG space
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setStringX(x);
    setStringY(y);
  };

  const resetString = () => {
   gsap.to(pathRef.current, {
      attr: { d: "M 0 50 Q 50 50 100 50" },
      duration: 2.8,
      ease: "elastic.out(2,0.1)",
    });

    // Reset state AFTER animation target is defined
    setStringX(50);
    setStringY(50);
  };

  return (
    <div className="string bg-white w-[100vw] cursor-grabbing" onMouseMove={handleMove} onMouseLeave={resetString}>
      <svg
        viewBox="0 0 100 100"
        width="90vw"
        height="160"
        preserveAspectRatio="none"
        className="mx-auto"
      >
        <path
          ref={pathRef}
          d={`M 0 50 Q ${stringX} ${stringY} 100 50`}
          stroke="black"
          fill="transparent"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default String;
