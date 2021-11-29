import React from "react";
import CardList from "../card-list/card-list.component";

import "./section.styles.scss";

function Section({ front, cards }) {
  return (
    <div>
      <h1>{front}</h1>
      <CardList cards={cards} />
    </div>
  );
}

export default Section;
