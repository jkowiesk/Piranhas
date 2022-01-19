package pap.project.piranhas.model;



public class Flashcard {

    private int id = 0;
    private final String front;
    private final String back;

    public Flashcard(String front, String back) {
        this.front = front;
        this.back = back;
    }

    public Flashcard(int id, String front, String back) {
        this.id = id;
        this.front = front;
        this.back = back;
    }

    public int getId() {return id;}

    public String getFront() {
        return front;
    }

    public String getBack() {
        return back;
    }
}
