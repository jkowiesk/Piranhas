import React from "react";
import { myCourses, marketCourses } from "../../mocks/courseCards";
import CardSection from "../../components/CardSection/CardSection";

import s from "./Homepage.module.scss";

function randint(a) {
  return Math.floor(Math.random() * a);
}

const HomePage = () => {
  let sets = myCourses.map((course) => course.sets[randint(3)]);
  console.log(sets);
  console.log(marketCourses);
  return (
    <div>
      <CardSection title="My Sets" cards={sets} />
      <CardSection title="Market Sets" cards={marketCourses} />
    </div>
  );
}

export default HomePage;
