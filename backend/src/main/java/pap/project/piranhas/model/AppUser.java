package pap.project.piranhas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AppUser {

    private int id;
    private String userName;
    private String password;
    private String email;
}
