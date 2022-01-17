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
        public String generateToken(@RequestBody AuthRequest authRequest, HttpServletResponse response) throws Exception {

                try {
                        authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
                        );
                        return jwtUtil.generateToken(authRequest.getUserName());
                } catch (Exception e) {
                        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                        return "Invaild username or password";
                }


        }

        @PostMapping(path = "/signup")
        public void registerUser(@RequestBody RegisterRequest registerRequest, HttpServletResponse response) {
                int code = appUserService.registerUser(registerRequest.getUserName(), registerRequest.getPassword(), registerRequest.getEmailAddress());
                if (code == -1) response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }

        @GetMapping(path = "/market")
        public List<Set> getMarketSets() {
                return flashcardService.getAllPublicSets();
        }

        @GetMapping(path ="/market/{setName}")
        public List<Flashcard> getMarketSet(@PathVariable("setName") String setName, HttpServletResponse response) {
                Set set = flashcardService.getMarketSetByName(setName);
                if (set != null) return set.getFlashcards();
                else {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        return null;
                }
        }

        @GetMapping(path = "/my-courses/{courseName}/{setName}")
        public List<Flashcard> getUserSet(@PathVariable("setName") String setName, HttpServletResponse response) {
                Set set = flashcardService.getSetByName(setName);
                if (set != null) return set.getFlashcards();
                else {
                        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                        return null;
                }
        }

        @GetMapping(path = "/my-courses")
        public List<Course> getUserCourses() {
                return flashcardService.getUserCourses();
        }

        @GetMapping(path = "/my-courses/{courseName}")
        public List<Set> getUserCourse(@PathVariable("courseName") String courseName) {
                return flashcardService.getCourse(courseName);
        }

        @PostMapping(path = "/my-courses/{courseName}/add-set")
        public void addSet(@PathVariable("courseName") String courseName, @RequestBody SetRequest setRequest, HttpServletResponse response) {
                int code = flashcardService.addNewSetToCourse(setRequest.getName(), setRequest.getIsPrivate(), courseName);
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
