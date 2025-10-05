import React, { useEffect } from "react";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const ingredients = document.querySelectorAll(".loader-container .ingredient");

    function resetBurger() {
      ingredients.forEach((ingredient) => {
        ingredient.classList.add("reset-burger");
      });
      setTimeout(() => {
        ingredients.forEach((ingredient) => {
          ingredient.classList.remove("reset-burger");
        });
      }, 300);
    }

    const interval = setInterval(resetBurger, 5500);

    const timer = setTimeout(() => {
      clearInterval(interval);
      if (onFinish) onFinish();
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="loader-container">
      <img
        src="https://cdn4.iconfinder.com/data/icons/burger-6/500/bep146_27_burger_top_bun_cartoon_retro_silhouette_food-512.png"
        alt="Bun Top"
        className="ingredient bun-top"
      />
      <img
        src="https://cdn4.iconfinder.com/data/icons/burger-6/500/bep146_5_burger_salad_cartoon_retro_food_vintage_fish-512.png"
        alt="Lettuce"
        className="ingredient lettuce"
      />
      <img
        src="https://cdn4.iconfinder.com/data/icons/burger-6/500/bep146_29_burger_meat_cartoon_dog_retro_food_vintage-512.png"
        alt="Patty"
        className="ingredient patty"
      />
      <img
        src="https://cdn4.iconfinder.com/data/icons/burger-6/500/bep146_32_burger_cheese_cartoon_retro_silhouette_food_vintage-512.png"
        alt="Cheese"
        className="ingredient cheese"
      />
      <img
        src="https://i.redd.it/4uy2z3wdfjd61.png"
        alt="Bun Bottom"
        className="ingredient bun-bottom"
      />
    </div>
  );
};

export default Loader;
