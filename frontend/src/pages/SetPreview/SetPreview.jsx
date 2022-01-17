import UserService from "../../services/UserService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FlashcardSection from "../../components/FlashcardSection/FlashcardSection";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import Card from "../../components/UI/Card/Card";
import CustomButton from "../../components/CustomButton/CustomButton";

import s from "./SetPreview.module.scss";

const SetPreview = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [flashcardType, setFlashcardType] = useState("list");
  const { setName } = useParams();

  useEffect(() => {
    UserService.getMarketSet(setName).then((response) => {
      setFlashcards(response.data);
    });
  }, []);

  const onListType = () => {
    setFlashcardType("list");
  };

  const onCarouselType = () => {
    setFlashcardType("carousel");
  };

  return (
    <Card title="Set Preview" size="2">
      <div className={s.wrapper}>
        <div className={s.typeButtons}>
          <CustomButton onClick={onListType}>List</CustomButton>
          <CustomButton onClick={onCarouselType}>Carousel</CustomButton>
        </div>
        <FlashcardSection flashcards={flashcards} type={flashcardType} />
      </div>
    </Card>
  );
};

export default SetPreview;
