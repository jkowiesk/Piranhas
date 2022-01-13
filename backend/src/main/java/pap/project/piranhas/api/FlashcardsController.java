package pap.project.piranhas.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import pap.project.piranhas.model.*;
import pap.project.piranhas.service.AppUserDetailsService;
import pap.project.piranhas.service.FlashcardService;
import pap.project.piranhas.util.JwtUtil;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

@RequestMapping("api")
@RestController
public class FlashcardsController {

        private final FlashcardService flashcardService;

        private final AppUserDetailsService appUserService;

        @Autowired
        private JwtUtil jwtUtil;
        @Autowired
        private AuthenticationManager authenticationManager;

        @Autowired
        public FlashcardsController(FlashcardService flashcardService, AppUserDetailsService appUserService) {
                this.flashcardService = flashcardService;
                this.appUserService = appUserService;
        }

        @GetMapping(path = "/")
        public Map<String, List<Set>> getPreviewSets() {
                return flashcardService.getPreviewSets();
        }

        @PostMapping(path = "/signin")
        public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {

                try {
                        authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
                        );
                } catch (Exception e) {
                        throw new Exception("Invalid username or password.");
                }
                return jwtUtil.generateToken(authRequest.getUserName());
        }

        @PostMapping(path = "/signup")
        public void registerUser(@RequestBody RegisterRequest registerRequest, HttpServletResponse response) {
                int code = appUserService.registerUser(registerRequest.getUserName(), registerRequest.getPassword(), registerRequest.getEmailAddress());
                if (code == -1) response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }

//        @CrossOrigin
        @GetMapping(path = "/market")
        public List<Set> getMarketSets() {
                return flashcardService.getAllPublicSets();
        }

        @GetMapping(value = {"/market/{setName}", "/my-courses/{courseName}/{setName}"})
        public List<Flashcard> getMarketSet(@PathVariable("setName") String setName, HttpServletResponse response) {
                Set set = flashcardService.getSetByName(setName);
                if (set != null) return set.getFlashcards();
                else {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        return null;
                }
        }

//        @CrossOrigin
        @GetMapping(path = "/my-courses")
        public List<Course> getUserCourses() {
                return flashcardService.getUserCourses();
        }

        @GetMapping(path = "/my-courses/{courseName}")
        public List<Set> getCourse(@PathVariable("courseName") String courseName) {
                return flashcardService.getCourse(courseName);
        }

//        @PostMapping(path = "/add-flashcard")
//        public void addFlashcard(@RequestBody FlashcardRequest flashcardRequest, HttpServletResponse response) {
//                Flashcard flashcard = new Flashcard(flashcardRequest.getFront(), flashcardRequest.getBack());
//                int code = flashcardService.addFlashcard(flashcardRequest.getSetName(), flashcard);
//                if (code == -1) response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
//        }

        @PostMapping(path = "/my-courses/{courseName}/add-set")
        public void addSet(@PathVariable("courseName") String courseName, @RequestBody AddRequest addRequest, HttpServletResponse response) {
                int code = flashcardService.addNewSetToCourse(addRequest.getName(), courseName);
                if (code == -1) response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }

        @PostMapping(path = "/my-courses/{courseName}/{setName}/add-flashcard")
        public void addFlashcardToSet(@PathVariable("setName") String setName, @RequestBody FlashcardRequest flashcardRequest, HttpServletResponse response) {
                int code = flashcardService.addFlashcard(setName, new Flashcard(flashcardRequest.getFront(), flashcardRequest.getBack()));
                if (code == -1) response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }

        @PostMapping(path = "/my-courses/add-course")
        public void addCourse(@RequestBody AddRequest addRequest, HttpServletResponse response) {
                int code = flashcardService.createNewCourse(addRequest.getName());
                if (code == -1) response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }

}
