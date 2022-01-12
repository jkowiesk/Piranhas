import AddCardButton from "../../components/AddCardButton/AddCardButton";
import SetSection from "../../components/SetSection/SetSection";
import Card from "../../components/UI/Card/Card";
import { useState, useEffect } from "react";
import UserService from "../../services/UserService";

import s from "./MyCourses.module.scss";

const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  useEffect(() => {
    UserService.getCourses().then((response) => {
      setMyCourses(response.data);
    });
  }, []);
  const courses = myCourses.map(({ name, sets }) => {
    return (
      <SetSection
        courseName={name}
        items={sets}
        routeUrl={name.toLowerCase()}
      />
    );
  });

  return (
    <Card title="My courses" size="1">
      {courses}
      <span className={s.button}>
        <AddCardButton label="Add New Course" link="add-course" />
      </span>
    </Card>
  );
};

export default MyCourses;
