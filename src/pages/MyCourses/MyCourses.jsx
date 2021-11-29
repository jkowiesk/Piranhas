import React from "react";
import Section from "../../components/CardSection/CardSection";
import { myCourses } from "../../courseCards.js";

import s from "./MyCourses.module.scss";

const MyCourses = () => {
  return (
    <div>
      {myCourses.map(({ front, sets }) => (
        <Section front={front} cards={sets} />
      ))}
    </div>
  );
}

export default MyCourses;
