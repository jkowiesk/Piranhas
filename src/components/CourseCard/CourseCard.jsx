import React from "react";

import s from "./CourseCard.module.scss";

const CourseCard = ({ front }) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{front}</h1>
    </div>
  );
}

export default CourseCard;
