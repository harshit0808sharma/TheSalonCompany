"use client";

import { useEffect, useState } from "react";

export default function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="cursor-dot hidden lg:block"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
}
