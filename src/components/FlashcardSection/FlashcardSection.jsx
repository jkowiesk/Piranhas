import FlashcardList from "../FlashcardList/FlashcardList";
import s from "./FlashcardSection.module.scss";

const FlashcardSection = ({ flashcards, type = "list" | "carousel" }) => {
  return (
    <div className={s.wrapper}>
      {type === "list" && <FlashcardList flashcards={flashcards} />}
    </div>
  );
};

export default FlashcardSection;
