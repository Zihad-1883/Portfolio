"use client";
import { useEffect, useState } from "react";

export default function StarField() {
  const [stars, setStars] = useState([]);
  const layers = [
    { count: 80, size: 1, opacity: 0.2, tier: "far" },
    { count: 50, size: 1.5, opacity: 0.4, tier: "mid" },
    { count: 20, size: 2.5, opacity: 0.6, tier: "near" },
  ];

  useEffect(() => {
    const allStars = [];
    layers.forEach((layer, layerIdx) => {
      for (let i = 0; i < layer.count; i++) {
        allStars.push({
          id: `${layerIdx}-${i}`,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: layer.size + Math.random() * 0.5,
          opacity: layer.opacity,
          duration: 4 + Math.random() * 6,
          delay: Math.random() * 10,
        });
      }
    });
    setStars(allStars);
  }, []);

  return (
    <div className="starfield">
      <div className="nebula" />
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s infinite ease-in-out ${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
