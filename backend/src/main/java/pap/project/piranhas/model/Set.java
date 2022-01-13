package pap.project.piranhas.model;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Set {

    public enum privacyPolicy {
        Private,
        Public
    }

    private String name;
    private List<Flashcard> flashcards;
    private String courseName;
    private privacyPolicy privacy;


    public Set(String name) {
        this.name = name;
        this.flashcards = new ArrayList<>();
        this.courseName = "none";
        this.privacy = privacyPolicy.Public;
    }
    public void addFlashcard(Flashcard flashcard) {
        flashcards.add(flashcard);
    }

}
