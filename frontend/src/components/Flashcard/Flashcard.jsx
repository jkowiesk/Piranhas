import { useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import { ModifyDialog } from "../ModifyDialog/ModifyDialog";

import s from "./Flashcard.module.scss";

const Flashcard = ({ id, front, back, mode = "public" }) => {
  const [cardSide, setCardSide] = useState(front);

  const cardHandler = () => {
    setCardSide(cardSide === front ? back : front);
  };

  return mode === "public" ? (
    <PublicFlashcard cardHandler={cardHandler} cardSide={cardSide} />
  ) : (
    <PrivateFlashcard cardHandler={cardHandler} cardSide={cardSide} id={id} />
  );
};

const PublicFlashcard = ({ cardHandler, cardSide }) => (
  <div className={s.wrapper} onClick={cardHandler}>
    <h1 className={s.title}>{cardSide}</h1>
  </div>
);

const PrivateFlashcard = ({ id, cardHandler, cardSide }) => {
  const [open, setOpen] = useState(false);
  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <div className={s.wrapper} onClick={cardHandler}>
        <h1 className={s.title}>{cardSide}</h1>
        <ModeIcon className={s.modBtn} onClick={() => setOpen(true)} />
      </div>
      <ModifyDialog open={open} onClose={handleClose} id={id} />
    </div>
  );
};

export default Flashcard;
