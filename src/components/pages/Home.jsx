import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import React, { useEffect } from "react";


function Home() {
  useEffect(() => {
    document.title = "Home | Aidan Hennessy";
  }, []);
  console.log("Home rendered"); // Debugging log

  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
