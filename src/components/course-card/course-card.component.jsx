import React from "react";

import "./course-card.styles.scss";

function CourseCard(props) {
  return (
    <div className="course-card">
      <h1>{props.front}</h1>
    </div>
  );
}

export default CourseCard;
