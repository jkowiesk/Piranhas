import React from "react";
import Section from "../../components/section/section.component";
import { myCourses } from "../../courseCards.js";

import "./my-courses.styles.scss";

function MyCourses() {
  console.log(myCourses);
  return (
    <div>
      {myCourses.map(({ front, flashcards }) => (
        <Section front={front} cards={flashcards} />
      ))}
    </div>
  );
}

export default MyCourses;
