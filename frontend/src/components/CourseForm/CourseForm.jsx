import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputText from "../InputText/InputText";
import UserService from "../../services/UserService";
import CustomButton from "../CustomButton/CustomButton";
import Card from "../UI/Card/Card";

import s from "./CourseForm.module.scss";

const CourseForm = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    UserService.postCourse(courseName).then((response) => {
      navigate("/my-courses");
    });
  };

  const handleChange = (e) => {
    setCourseName(e.target.value);
  };

  return (
    <form>
      <Card size="2" title="Course Form" className={s.wrapper}>
        <div className={s.content}>
          <InputText
            label="Course Name"
            type="text"
            value={courseName}
            handleChange={handleChange}
          />
        </div>
        <CustomButton onClick={onClick} type="submit">
          Submit
        </CustomButton>
      </Card>
    </form>
  );
};

export default CourseForm;
