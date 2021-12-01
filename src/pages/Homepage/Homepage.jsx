import React from "react";
import { myCourses, marketCourses } from "../../mocks/courseCards";
import ItemSection from "../../components/ItemSection/ItemSection";

import s from "./Homepage.module.scss";

function randint(a) {
  return Math.floor(Math.random() * a);
}

const HomePage = () => {
  let sets = myCourses.map((course) => course.items[randint(3)]);
  console.log(sets);
  console.log(marketCourses);
  return (
    <div>
      <ItemSection name="My Sets" items={sets} />
      <ItemSection name="Market Sets" items={marketCourses} />
    </div>
  );
};

export default HomePage;
