import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <div className="cards__container"></div>
      <div className="cards__wrapper"></div>
      <ul className="cards__items">
        <CardItem
          src="/images/unfollowers.png"
          target="_blank"
          text="Find out who has unfollowed you on Instagram"
          label="JavaScript   +   React"
          path="https://cheery-eclair-61cc3e.netlify.app/"
        />
        <CardItem
          src="/images/TFRRS.jpg"
          text="Predict Scores of Conference Meets Based on Results"
          label="JavaScript   +   Express.js   +   Puppeteer"
          path="/services"
        />
        <CardItem
          src="images/combine.jpg"
          text="Random Forest model that predicts which players will be drafted to the NFL based on their combine results"
          label="R   +   randomForest"
          path="/services"
        />
        <CardItem
          src="images/img-4.jpg"
          text="Experience Football on Top of the Himilayan Mountains"
          label="Adventure"
          path="/products"
        />
       
      </ul> 
    </div>
  );
}

export default Cards;
