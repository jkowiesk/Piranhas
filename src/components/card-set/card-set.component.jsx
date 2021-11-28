import React from "react";

import "./card-set.styles.scss";

function CardSet(props) {
  return (
    <div className="card-set">
      <h1>{props.name}</h1>
    </div>
  );
}

export default CardSet;
