import React from "react";
import { myCourses, marketCourses } from "../../courseCards.js";
import Section from "../../components/section/section.component.jsx";

import "./homepage.styles.scss";

function randint(a) {
  return Math.floor(Math.random() * a);
}

function HomePage() {
  let sets = myCourses.map((course) => course.sets[randint(3)]);
  console.log(sets);
  console.log(marketCourses);
  return (
    <div>
      <Section front="My Sets" cards={sets} />
      <Section front="Market Sets" cards={marketCourses} />
    </div>
  );
}

export default HomePage;
