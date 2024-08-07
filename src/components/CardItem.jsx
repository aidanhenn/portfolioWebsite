import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item"></li>
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            src={props.src}
            
            //if img doesnt load try this instead: src={process.env.PUBLIC_URL + props.src}
            alt="Travel"
            className="cards__item__img"
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </>
  );
}

export default CardItem;
