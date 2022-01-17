package pap.project.piranhas.dao;

import pap.project.piranhas.model.Course;
import pap.project.piranhas.model.Flashcard;
import pap.project.piranhas.model.Set;

import java.util.List;
import java.util.Map;

public interface FlashcardsDAO {


    Set getSetByName(String setName);
    Set getSetByNameSecure(String setName, String userName);

    List<Set> getAllPublicSets();
    List<Set> getAllUserSets(String userName);
    Course getCourse(String courseName);
    List<Course> getAllUserCourses(String userName);

    int addFlashcardToSet(String setName, String front, String back);
    int createCourse(String courseName, String userName);
    int setSetPrivacy(int priv, String setName, String userName);
    int addSetToCourse(String setName, String courseName);
    int removeSetFromCourse(String setName);
    int deleteSet(String setName);



}