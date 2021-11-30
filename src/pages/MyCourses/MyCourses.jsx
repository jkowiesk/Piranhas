import React from "react";
import CardSection from "../../components/CardSection/CardSection";
import { items } from "../../mocks/courseCards.js";

import s from "./MyCourses.module.scss";

const MyCourses = () => {
  const courses = items.map(item => {
    return <CardSection title={item.folder} cards={item.cards} />
  })

  return (
    <div>
      {courses}
    </div>
  );
}

export default MyCourses;
