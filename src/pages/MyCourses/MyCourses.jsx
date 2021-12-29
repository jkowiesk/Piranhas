import React from "react";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import SetSection from "../../components/SetSection/SetSection";
import Card from "../../components/UI/Card/Card";
import { myCourses } from "../../mocks/courseCards.js";

import s from "./MyCourses.module.scss";

const MyCourses = () => {
  const courses = myCourses.map(({ name, items }) => {
    return (
      <SetSection name={name} items={items} routeUrl={name.toLowerCase()} />
    );
  });

  return (
    <Card title="My courses">
      {courses}
      <span className={s.button}>
        <AddCardButton label="Add New Course" link="add-course" />
      </span>
    </Card>
  );
};

export default MyCourses;
