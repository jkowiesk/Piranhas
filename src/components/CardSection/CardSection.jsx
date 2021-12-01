import React from "react";
import CardList from '../CardList/CardList';

import s from "./CardSection.module.scss";

const CardSection = ({ title, items }) => {
  return (
    <div>
      <h1>{title}</h1>
      <CardList cards={items} />
    </div>
  );
}

export default CardSection;
