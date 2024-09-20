import React from "react";
//import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <li className="cards__item">
      <a
        className="cards__item__link"
        href={props.projectPath ? props.projectPath : props.path}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card__links">
          {/* Link to the deployed project */}
          <a
            className="card__btn"
            href={props.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
          {/* Link to the source code */}
          {props.projectPath && (
            <a
              className="card__btn"
              href={props.projectPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </div>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img src={props.src} alt={props.text} className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
