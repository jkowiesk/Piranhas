import React from "react";
import CardList from '../CardList/CardList';

import s from "./CardSection.module.scss";

const Section = ({ front, cards }) => {
  return (
    <div>
      <h1>{front}</h1>
      <CardList cards={cards} />
    </div>
  );
}

export default Section;
