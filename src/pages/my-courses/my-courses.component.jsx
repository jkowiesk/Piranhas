import React from "react";
import Section from "../../components/section/section.component";
import { myCourses } from "../../courseCards.js";

import "./my-courses.styles.scss";

function MyCourses() {
  return (
    <div>
      {myCourses.map(({ front, sets }) => (
        <Section front={front} cards={sets} />
      ))}
    </div>
  );
}

export default MyCourses;
