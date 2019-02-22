import React from "react";
import "./index.scss";

function Header() {
  return (
    <header className="Header">
      <h1>Doggo</h1>
      <hr />
      <p className="Header--contact">Phone: +3705555555</p>
      <p className="Header--contact">
        Email:{" "}
        <a
          href="mailto:email@doggo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          email@doggo.com
        </a>
      </p>
      <p className="Header--summary">
        Ice cream fruitcake dessert cheesecake. Chocolate sweet roll donut
        cupcake. Sugar plum pastry ice cream. Pudding carrot cake lemon drops
        jelly. Marshmallow brownie jelly-o cake cheesecake. Danish macaroon
        soufflé.
      </p>
      <img
        className="Header--profile-picture"
        alt="This is an office dog"
        src="https://www.hashtaghr.com.au/images/easyblog_articles/150/b2ap3_large_Office-Dog.png"
      />
    </header>
  );
}

export default Header;
