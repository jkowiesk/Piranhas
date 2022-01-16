import { FlashcardCarousel } from "../FlashcardCarousel/FlashcardCarousel";
import FlashcardList from "../FlashcardList/FlashcardList";

const FlashcardSection = ({ flashcards, type = "list" | "carousel" }) => {
  return (
    <>
      {type === "list" && <FlashcardList flashcards={flashcards} />}
      {type === "carousel" && <FlashcardCarousel flashcards={flashcards}/>}
    </>
  );
};

export default FlashcardSection;
