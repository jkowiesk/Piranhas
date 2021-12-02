import React from "react";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import ItemSection from "../../components/ItemSection/ItemSection";
import { myCourses } from "../../mocks/courseCards.js";

import s from "./MyCourses.module.scss";

const MyCourses = () => {
  const courses = myCourses.map(({ name, items }) => {
    return <ItemSection name={name} items={items} />;
  });

  return (
  <div className={s.wrapper}>
    <div>
      {courses}
    </div>
    <div className={s.button}>
      <AddCardButton/>
    </div>
  </div>
  )
};

export default MyCourses;
