import React from "react";
import CourseCard from "../course-card/course-card.component.jsx";

import s from './CardList.module.scss';

const CardList = ({ cards }) =>  {
  return (
    <div className={s.wrapper}>
      {cards.map((card) => (
        <CourseCard front={card.front} />
      ))}
    </div>
  );
}

export default CardList;
