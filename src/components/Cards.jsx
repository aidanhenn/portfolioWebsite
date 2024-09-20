import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards" id="cards">
      <div className="cards__container"></div>
      <div className="cards__wrapper"></div>
      <ul className="cards__items">
        <CardItem
          src="/images/unfollowers.png"
          text="INSTAGRAM UNFOLLOWER FINDER"
          label="JavaScript + React"
          path="https://github.com/aidanhenn/WhoUnfollowedMe" // Source code link
          projectPath="https://cheery-eclair-61cc3e.netlify.app/"
        />
        <CardItem
          src="/images/TFRRS.jpg"
          text="TRACK AND FIELD CONFERENCE SCORE PREDICTOR"
          label="JavaScript + Express.js + Puppeteer"
          path="https://github.com/aidanhenn/team-scoring-app"
          projectPath="https://team-scoring-app-6b025b09d32e.herokuapp.com/" // Source code link
        />
      </ul>
      <ul className="cards__items">
        <CardItem
          src="images/combine.jpg"
          text="NFL DRAFT PREDICTOR"
          label="R + randomForest"
          path="https://github.com/aidanhenn/NFL_combine"
        />
        <CardItem
          src="images/rr.jpg"
          text="ROUND ROBIN SIMULATOR"
          label="Python"
          path="https://github.com/aidanhenn/roundRobin"
        />
      </ul>
    </div>
  );
}

export default Cards;
