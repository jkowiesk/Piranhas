import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InputText from "../InputText/InputText";
import Card from "../UI/Card/Card";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import s from "./SetForm.module.scss";

const SetForm = () => {
  const navigate = useNavigate();
  const [setName, setSetName] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    UserService.postCourse(setName).then((response) => {
      navigate("/my-courses");
    });
  };

  const handleChange = (e) => {
    setSetName(e.target.value);
  };

  return (
    <Card
      onSubmit={submitHandler}
      size="2"
      title="Set Form"
      className={s.wrapper}
    >
      <div className={s.content}>
        <InputText
          label="Set Name"
          type="text"
          value={setName}
          handleChange={handleChange}
        />
      </div>
      <CustomButton> Submit </CustomButton>
    </Card>
  );
};

export default SetForm;
