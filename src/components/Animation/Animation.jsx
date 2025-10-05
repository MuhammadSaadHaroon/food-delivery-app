import React, { useEffect } from "react";
import { confetti } from "tsparticles-confetti";

const Animation = () => {
  useEffect(() => {
    const end = Date.now() + 5 * 1000;

    const foodImages = [
      "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", 
      "https://cdn-icons-png.flaticon.com/512/3075/3075972.png", 
      "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", 
      "https://cdn-icons-png.flaticon.com/512/1046/1046786.png"  
    ];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        shapes: ["image"],
        shapeOptions: {
          image: foodImages.map(src => ({
            src,
            width: 32,
            height: 32,
          })),
        },
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        shapes: ["image"],
        shapeOptions: {
          image: foodImages.map(src => ({
            src,
            width: 32,
            height: 32,
          })),
        },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null; // ye component visible nahi hoga, sirf animation run karega
};

export default Animation;
