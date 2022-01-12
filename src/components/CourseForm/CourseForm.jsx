import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputText from "../InputText/InputText";
import UserService from "../../services/UserService";
import CustomButton from "../CustomButton/CustomButton";
import Card from "../UI/Card/Card";

import s from "./CourseForm.module.scss";

const CourseForm = ({ onClick }) => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    UserService.postCourse(courseName).then((response) => {
      navigate("/my-courses");
    });
  };

  const handleChange = (e) => {
    setCourseName(e.target.value);
  };

  return (
    <Card
      onSubmit={submitHandler}
      size="2"
      title="Course Form"
      className={s.wrapper}
    >
      <div className={s.content}>
        <InputText
          label="Course Name"
          type="text"
          handleChange={handleChange}
        />
      </div>
      <CustomButton> Subbmit </CustomButton>
    </Card>
  );
};

export default CourseForm;
