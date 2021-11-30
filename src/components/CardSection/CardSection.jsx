import React from "react";
import CardList from '../CardList/CardList';

import s from "./CardSection.module.scss";

const CardSection = ({ title, cards }) => {
  return (
    <div>
      <h1>{title}</h1>
      <CardList cards={cards} />
    </div>
  );
}

export default CardSection;
