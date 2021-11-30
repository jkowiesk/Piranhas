import React from "react";
import CourseCard from "../CourseCard/CourseCard";

import s from './CardList.module.scss';

const CardList = ({ cards }) =>  {
  const cardList = cards.map((card) => (
    <CourseCard front={card.front} back={card.back}/>
  ));

  return (
    <div className={s.wrapper}>
      {cardList}
    </div>
  );
}

export default CardList;
