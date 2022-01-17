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
  const [isPrivate, setIsPrivate] = useState(false);

  const onCheckboxClick = (event) => {
    setIsPrivate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    UserService.postSet(courseName, setName, isPrivate)
      .then((response) => {
        navigate(`/my-courses/${courseName}`);
      })
      .catch((error) => {
        console.log(error);
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
          {/* <input type="checkbox" id="private" onClick={onCheckboxClick} />
          <label for="private">Private</label> */}
        </div>
        <CustomButton type="submit" onClick={onSubmit}>
          Submit
        </CustomButton>
      </Card>
    </form>
  );
};

export default SetForm;
