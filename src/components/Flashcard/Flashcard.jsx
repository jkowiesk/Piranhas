import React, { useState } from "react";

import s from "./Flashcard.module.scss";

const Flashcard = ({ front, back }) => {
  const [cardSide, setCardSide] = useState(front);

  const cardHandler = () => {
    setCardSide(cardSide === front ? back : front);
  };

  return (
    <div className={s.wrapper} onClick={cardHandler}>
      <h1 className={s.title}>{cardSide}</h1>
    </div>
  );
};

export default Flashcard;
