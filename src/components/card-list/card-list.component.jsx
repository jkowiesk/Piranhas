import React from "react";
import CourseCard from "../course-card/course-card.component.jsx";

import "./card-list.styles.scss";

function CardList({ cards }) {
  console.log(cards);
  return (
    <div className="card-list">
      {cards.map((card) => (
        <CourseCard front={card.front} />
      ))}
    </div>
  );
}

export default CardList;
