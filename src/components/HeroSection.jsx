import React, { useEffect, useCallback } from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  console.log("HeroSection rendered"); // Debugging log

  // Function to generate random values within a range
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Create multiple squares with random sizes and x-coordinates
  const createSquares = useCallback(() => {
    const heroContainer = document.querySelector(".hero-container");
    const numberOfSquares = 10; // Adjust the number of squares as needed

    for (let i = 0; i < numberOfSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      // Set random size for the square
      const size = getRandom(20, 100); // Size between 20px and 100px
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;

      // Set random x-coordinate
      const randomX = getRandom(0, window.innerWidth - size);
      square.style.left = `${randomX}px`;

      // Set random animation duration for floating and rotation
      const floatDuration = getRandom(5, 10); // 5 to 10 seconds
      const rotateDuration = getRandom(3, 8); // 3 to 8 seconds
      square.style.animationDuration = `${floatDuration}s, ${rotateDuration}s`;

      // Add the square to the hero-container
      heroContainer.appendChild(square);
    }
  }, []);

  // Use useEffect to create squares when component mounts
  useEffect(() => {
    createSquares();

    // Optionally, handle window resizing for responsive random placement
    const handleResize = () => {
      document.querySelector(".hero-container").innerHTML = '';
      createSquares();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [createSquares]); // Add createSquares as a dependency

  return (
    <div className="hero-container">
      <h1>
        Hi, I'm <span className="name">Aidan.</span> <br />
        Welcome to my website.
      </h1>
      <div className="hero-btns">
        <a className="projectsButton" href="#cards">
          Projects
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
