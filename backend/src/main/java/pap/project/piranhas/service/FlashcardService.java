package pap.project.piranhas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import pap.project.piranhas.dao.FlashcardsDAO;
import pap.project.piranhas.model.Course;
import pap.project.piranhas.model.Flashcard;
import pap.project.piranhas.model.Set;
import pap.project.piranhas.util.JwtUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class FlashcardService {

    private final FlashcardsDAO flashcardsDao;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    public FlashcardService(@Qualifier("oracleDao") FlashcardsDAO flashcardsDao) {
        this.flashcardsDao = flashcardsDao;
    }

    public int addFlashcard(String setName, Flashcard flashcard) {
        return flashcardsDao.addFlashcardToSet(setName, flashcard.getFront(), flashcard.getBack());
    }

    public List<Set> getAllPublicSets() { return flashcardsDao.getAllPublicSets(); }

    public Set getSetByName(String setName) {

        String userName = getUserNameFromToken();

        return flashcardsDao.getSetByNameSecure(setName, userName);

    }

    public Map<String, List<Set>> getPreviewSets() {

        int USER_SETS = 5;
        int PUBLIC_SETS = 5;
        List<Set> myPreviewSets = new ArrayList<Set>();
        List<Set> marketPreviewSets = new ArrayList<Set>();
        Map<String, List<Set>> previewSets = new HashMap<>();

        String userName = getUserNameFromToken();

        if (userName != null) {
            List<Set> userSets = flashcardsDao.getAllUserSets(userName);
            USER_SETS = userSets.size() >= USER_SETS ? USER_SETS : userSets.size();
            if (USER_SETS != 0) {
                Collections.shuffle(userSets);
                for (int j = 0; j < USER_SETS; j++) {
                    Set randSet = userSets.get(j);
                    myPreviewSets.add(randSet);
                }
            }
        }

        previewSets.put("mySets", myPreviewSets);

        List<Set> publicSets = flashcardsDao.getAllPublicSets();
        PUBLIC_SETS = publicSets.size() >= PUBLIC_SETS ? PUBLIC_SETS : publicSets.size();
        if (PUBLIC_SETS != 0) {
            Collections.shuffle(publicSets);
            for (int i =0; i < PUBLIC_SETS; i++) {
                Set randSet = publicSets.get(i);
                marketPreviewSets.add(randSet);
            }
        }

        previewSets.put("marketSets", marketPreviewSets);


        return previewSets;
    }

    public List<Course> getUserCourses() {

        List<Course> userCourses = new ArrayList<>();

        String userName = getUserNameFromToken();

        if (userName != null) {
            userCourses =  flashcardsDao.getAllUserCourses(userName);
        }

        return userCourses;
    }

    public List<Set> getCourse(String courseName) {

        return flashcardsDao.getCourse(courseName).getSets();
    }

    public int addNewSetToCourse(String setName, String courseName) {

        return flashcardsDao.addSetToCourse(setName, courseName);
    }

    public int createNewCourse(String courseName) {
        String userName = getUserNameFromToken();

        return flashcardsDao.createCourse(courseName, userName);
    }

    private String getUserNameFromToken() {
        HttpServletRequest request =
                ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
                        .getRequest();

        String authorizationHeader = request.getHeader("Authorization");

        String token = null;
        String userName = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            token = authorizationHeader.substring(7);
            userName = jwtUtil.extractUsername(token);
        }

        return userName;
    }



}
