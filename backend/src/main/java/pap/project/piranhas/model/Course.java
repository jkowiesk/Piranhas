package pap.project.piranhas.model;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    private String name;
    private List<Set> sets;

    public Course (String name) {
        this.name = name;
        this.sets = new ArrayList<>();
    }

    public void addSet(Set set) {
        this.sets.add(set);
    }
}
