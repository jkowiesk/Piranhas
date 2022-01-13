package pap.project.piranhas.model;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CourseTest {

    @Test
    void getName() {
        Course course1 = new Course("Biology");
        assertEquals(course1.getName(), "Biology");
        Course course2 = new Course();
        assertEquals(course2.getName(), null);

    }

    @Test
    void setName() {
        Course course = new Course();
        assertEquals(course.getName(), null);
        course.setName("Biology");
        assertEquals(course.getName(), "Biology");
    }

    @Test
    void getSets() {
        List<Set> sets = new ArrayList<>();
        Set set1 = new Set("Animals");
        Set set2 = new Set("Plants");
        sets.add(set1);
        sets.add(set2);
        Course course = new Course("Biology", sets);
        assertEquals(course.getSets(), sets);
    }

    @Test
    void setSets() {
        Course course = new Course("Biology");
        assertEquals(course.getSets(), new ArrayList<>());
        List<Set> sets = new ArrayList<>();
        Set set1 = new Set("Animals");
        Set set2 = new Set("Plants");
        sets.add(set1);
        sets.add(set2);
        course.setSets(sets);
        assertEquals(course.getSets(), sets);
    }

    @Test
    void addSet() {
        Course course = new Course("Biology");
        assertEquals(course.getSets(), new ArrayList<>());
        Set set = new Set("Animals");
        List<Set> sets = new ArrayList<>();
        sets.add(set);
        course.addSet(set);
        assertEquals(course.getSets(), sets);
    }
}