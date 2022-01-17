import UserService from "../../services/UserService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FlashcardSection from "../../components/FlashcardSection/FlashcardSection";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import Card from "../../components/UI/Card/Card";
import CustomButton from "../../components/CustomButton/CustomButton";

import s from "./FlashcardManager.module.scss";

const FlashcardManager = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [flashcardType, setFlashcardType] = useState('list')
  const { courseName, setName } = useParams();

  useEffect(() => {
    UserService.getCourseFlashcards(courseName, setName).then((response) => {
      setFlashcards(response.data);
    });
  }, []);

  const onListType = () => {
    setFlashcardType('list');
  }

  const onCarouselType = () => {
    setFlashcardType('carousel');
  }

  return (
    <Card title="Flashcard Manager" size="2">
      <div className={s.wrapper}>
        <div className={s.typeButtons}>
          <CustomButton onClick={onListType}>List</CustomButton>
          <CustomButton onClick={onCarouselType}>Carousel</CustomButton>
        </div>
        <FlashcardSection flashcards={flashcards} type={flashcardType} />
        <span className={s.button}>
          <AddCardButton label="Add New Flashcard" link="add-flashcard" />
        </span>
      </div>
    </Card>
  );
};

export default FlashcardManager;
