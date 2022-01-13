package pap.project.piranhas.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FlashcardTest {

    @Test
    void getFront() {
        Flashcard flashcard = new Flashcard("Tygrys", "Tiger");
        assertEquals(flashcard.getFront(), "Tygrys");
    }

    @Test
    void getBack() {
        Flashcard flashcard = new Flashcard("Tygrys", "Tiger");
        assertEquals(flashcard.getBack(), "Tiger");
    }
}