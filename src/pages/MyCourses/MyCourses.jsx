import React from "react";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import ItemSection from "../../components/ItemSection/ItemSection";
import { myCourses } from "../../mocks/courseCards.js";

import s from "./MyCourses.module.scss";

const MyCourses = () => {
  const courses = myCourses.map(({ name, items }) => {
    return (
      <ItemSection name={name} items={items} routeUrl={name.toLowerCase()} />
    );
  });

  return (
    <div>
      {courses}
      <div className={s.button}>
      <AddCardButton link="add-course"/>
      </div>
    </div>
  );
};

export default MyCourses;
