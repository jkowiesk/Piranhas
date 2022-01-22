import React from "react";
import clsx from "clsx";
import Flashcard from "../Flashcard/Flashcard";

import s from "./FlashcardList.module.scss";

const FlashcardList = (props) => {
  const flashcardList = props.flashcards.map(({ id, front, back }) => {
    return <Flashcard id={id} front={front} back={back} mode={props.mode} />;
  });

  return (
    <div className={clsx(s.wrapper, props.className)}>{flashcardList}</div>
  );
};

export default FlashcardList;
