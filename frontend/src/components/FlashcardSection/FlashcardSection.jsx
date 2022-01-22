import { FlashcardCarousel } from "../FlashcardCarousel/FlashcardCarousel";
import FlashcardList from "../FlashcardList/FlashcardList";

const FlashcardSection = ({
  flashcards,
  type = "list" | "carousel",
  mode = "public",
}) => {
  return (
    <>
      {type === "list" && <FlashcardList flashcards={flashcards} mode={mode} />}
      {type === "carousel" && <FlashcardCarousel flashcards={flashcards} />}
    </>
  );
};

export default FlashcardSection;
