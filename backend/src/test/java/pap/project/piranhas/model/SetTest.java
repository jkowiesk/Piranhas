package pap.project.piranhas.model;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SetTest {

    @Test
    void getName() {
        Set set = new Set("Animals");
        assertEquals(set.getName(), "Animals");
    }

    @Test
    void setName() {
        Set set = new Set("Animals");
        assertEquals(set.getName(), "Animals");
        set.setName("Plants");
        assertEquals(set.getName(), "Plants");
    }

    @Test
    void getCourseName() {
        Set set1 = new Set("Animals");
        assertEquals(set1.getCourseName(), "none");

        Set set2 = new Set("Animals", new ArrayList<>(), "Biology", Set.privacyPolicy.Public);
        assertEquals(set2.getCourseName(), "Biology");
    }

    @Test
    void setCourseName() {
        Set set = new Set("Animals");
        assertEquals(set.getCourseName(), "none");

        set.setCourseName("Biology");
        assertEquals(set.getCourseName(), "Biology");
    }

    @Test
    void addFlashcard() {
        Set set = new Set("Animals");
        assertEquals(set.getFlashcards(), new ArrayList<>());
        Flashcard flashcard = new Flashcard("Lew", "Lion");
        List<Flashcard> flashcards = new ArrayList<>();
        flashcards.add(flashcard);
        set.addFlashcard(flashcard);
        assertEquals(set.getFlashcards(), flashcards);
    }

    @Test
    void getFlashcards() {
        Set set = new Set("Animals");
        List<Flashcard> emptyList = new ArrayList<>();
        assertEquals(set.getFlashcards(), new ArrayList<>());
    }

    @Test
    void setFlashcards() {
        List<Flashcard> flashcards = new ArrayList<>();
        Flashcard flashcard1 = new Flashcard("Lew", "Lion");
        Flashcard flashcard2 = new Flashcard("Tygrys", "Tiger");
        flashcards.add(flashcard1);
        flashcards.add(flashcard2);
        Set set = new Set("Animals");
        assertEquals(set.getFlashcards(), new ArrayList<>());
        set.setFlashcards(flashcards);
        assertEquals(set.getFlashcards(), flashcards);

    }


}