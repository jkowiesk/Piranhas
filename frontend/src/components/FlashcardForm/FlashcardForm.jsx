import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import InputText from "../InputText/InputText";
import Card from "../UI/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";

import s from "./FlashcardForm.module.scss";

const FlashcardForm = () => {
  const navigate = useNavigate();
  const { courseName, setName } = useParams();
  const [flashcard, setFlashcard] = useState({ front: "", back: "" });

  const onClick = (event) => {
    event.preventDefault();
    console.log(
      UserService.postFlashcard(courseName, setName, flashcard)
        .then((response) => {
          navigate(`/my-courses/${courseName}/${setName}`);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFlashcard((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <form>
      <Card size="2" title="Flashcard Form" className={s.wrapper}>
        <div className={s.content}>
          <InputText
            label="front"
            type="text"
            value={flashcard.front}
            handleChange={handleChange}
          />
          <InputText
            label="back"
            type="text"
            value={flashcard.back}
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

export default FlashcardForm;
