import ItemSection from "../../components/ItemSection/ItemSection";
import UserService from "../../services/UserService";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import s from "./FlashcardManager.module.scss";
import FlashcardSection from "../../components/FlashcardSection/FlashcardSection";

const FlashcardManager = () => {
  const [flashcards, setFlashcards] = useState([]);
  const { courseName, setName } = useParams();
  useEffect(() => {
    UserService.getCourseFlashcards(courseName, setName).then((response) => {
      setFlashcards(response.data);
    });
  }, []);

  return (
    <div className={s.wrapper}>
      <FlashcardSection flashcards={flashcards} type="list" />
    </div>
  );
};

export default FlashcardManager;
