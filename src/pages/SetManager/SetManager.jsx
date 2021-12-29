import React from "react";
import { useParams } from "react-router-dom";
import AddCardButton from "../../components/AddCardButton/AddCardButton.jsx";
import Set from "../../components/Set/Set.jsx";
import Card from "../../components/UI/Card/Card.jsx";
import { myCourses } from "../../mocks/courseCards.js";

import s from "./SetManager.module.scss";

const SetManager = () => {
  const params = useParams();
  const [{ items }] = myCourses.filter(
    ({ name }) => name.toLowerCase() === params.courseName.toLowerCase()
  );

  const sets = items.map(({name}) => {
    return <Set title={name} />
  })

  return (
    <Card title="Set Manager">
      <div className={s.wrapper}>
        <div className={s.sets}>{sets}</div>
        <span className={s.button}><AddCardButton label="Add New Set" link="add-set"/> </span>
      </div>
    </Card>
  );
};

export default SetManager;
