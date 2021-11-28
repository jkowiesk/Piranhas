import React from "react";
import CardSet from "../../components/card-set/card-set.component";

import "./home-page.styles.scss";
import cardSets from "../../cards.js";

function HomePage() {
  return (
    <div>
      {cardSets.map((set) => (
        <CardSet name={set.name} />
      ))}
    </div>
  );
}

export default HomePage;
