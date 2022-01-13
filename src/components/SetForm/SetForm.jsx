import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InputText from "../InputText/InputText";
import Card from "../UI/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";
import s from "./SetForm.module.scss";

const SetForm = () => {
  const navigate = useNavigate();
  const { courseName } = useParams();
  const [setName, setSetName] = useState("");
  const onClick = (event) => {
    console.log("fajnie");
    event.preventDefault();
    UserService.postSet(courseName, setName).then((response) => {
      navigate(`/my-courses/${courseName}`);
    });
  };

  const handleChange = (e) => {
    setSetName(e.target.value);
  };

  return (
    <form>
      <Card size="2" title="Set Form" className={s.wrapper}>
        <div className={s.content}>
          <InputText
            label="Set Name"
            type="text"
            value={setName}
            handleChange={handleChange}
          />
        </div>
        <CustomButton type="submit" onClick={onClick}>
          Submit
        </CustomButton>
      </Card>
    </form>
  );
};

export default SetForm;
