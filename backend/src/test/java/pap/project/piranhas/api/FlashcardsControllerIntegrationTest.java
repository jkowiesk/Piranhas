package pap.project.piranhas.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import pap.project.piranhas.model.AuthRequest;
import pap.project.piranhas.model.Set;
import pap.project.piranhas.util.JwtUtil;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(FlashcardsController.class)
@ComponentScan("pap.project.piranhas.*")
class FlashcardsControllerIntegrationTest {

    public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(
            MediaType.APPLICATION_JSON.getType(), MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));

    @Autowired
    private MockMvc mockMvc;

    @Test
    void generateToken() throws Exception {

        JwtUtil jwtUtil = new JwtUtil();

        String url = "/api/signin";
        AuthRequest authRequest = new AuthRequest();
        authRequest.setUserName("JanKowalski");
        authRequest.setPassword("qwerty");

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson=ow.writeValueAsString(authRequest);

        MvcResult result = mockMvc.perform(post(url).contentType(APPLICATION_JSON_UTF8)
                .content(requestJson))
                .andExpect(status().isOk()).andReturn();
        String token = result.getResponse().getContentAsString();

        assertEquals(token.length(), 139); //username part length
        String tokenUserName = jwtUtil.extractUsername(token);
        assertEquals(tokenUserName, "JanKowalski");
    }

    @Test
    void getPreviewSets() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/");
        mockMvc.perform(request).andExpect(status().isOk());
    }

    @Test
    void addFlashcard() {
    }

    @Test
    void addSet() {
    }

    @Test
    void addCourse() {
    }
}