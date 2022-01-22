import Dialog from "@mui/material/Dialog";
import InputText from "../InputText/InputText";
import CustomButton from "../CustomButton/CustomButton";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { DialogContent, DialogTitle } from "@mui/material";

import UserService from "../../services/UserService";

import s from "./ModifyDialog.module.scss";

export const ModifyDialog = ({ id, open, onClose }) => {
  const { courseName, setName } = useParams();
  const navigate = useNavigate();
  const [flashcard, setFlashcard] = useState({ id: id, front: "", back: "" });
  const handleChange = (e) => {
    const { value, name } = e.target;

    setFlashcard((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const onClick = (event) => {
    event.preventDefault();
    console.log(
      UserService.putFlashcard(courseName, setName, flashcard)
        .then((response) => {
          navigate(`/my-courses/${courseName}/${setName}`);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      className={s.wrapper}
    >
      <DialogTitle className={s.title}>Edit Flashcard</DialogTitle>
      <DialogContent className={s.content}>
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
        <CustomButton type="submit" onClick={onClick}>
          Submit
        </CustomButton>
      </DialogContent>
    </Dialog>
  );
};
