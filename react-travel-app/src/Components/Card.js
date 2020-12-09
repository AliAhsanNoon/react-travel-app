import React from "react";
import CardItems from "./CardItems";
import "./Card.css";
function Card() {
  return (
    <div className="cards">
      <h1>Checkout these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="./images/img-9.jpg"
              text="Explore Hidder Waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="./images/img-1.jpg"
              text="Travel Through Island of Bali in a private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItems
              src="./images/img-5.jpg"
              text="Explore Hidder Waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="./images/img-8.jpg"
              text="Travel Through Island of Bali in a private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
