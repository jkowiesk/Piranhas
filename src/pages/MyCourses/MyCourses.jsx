import React from "react";
import ItemSection from "../../components/ItemSection/ItemSection.jsx";
import { myCourses } from "../../mocks/courseCards.js";

import s from "./MyCourses.module.scss";

const MyCourses = () => {
  console.log(myCourses);
  const courses = myCourses.map(({ name, items }) => {
    return <ItemSection name={name} items={items} />;
  });

  return <div>{courses}</div>;
};

export default MyCourses;
