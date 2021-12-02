import React from "react";
import { useParams } from "react-router-dom";
import AddCardButton from "../../components/AddCardButton/AddCardButton.jsx";
import ItemSection from "../../components/ItemSection/ItemSection.jsx";
import { myCourses } from "../../mocks/courseCards.js";

import s from "./SetManager.module.scss";

const SetManager = () => {
  const params = useParams();
  const [{ items }] = myCourses.filter(
    ({ name }) => name.toLowerCase() === params.courseName.toLowerCase()
  );

  return (
    <div>
      <ItemSection name="" items={items.flat()} link={params.courseName} />
      <AddCardButton link="add-set" />
    </div>
  );
};

export default SetManager;
