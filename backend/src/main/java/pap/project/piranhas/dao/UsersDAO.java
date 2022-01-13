package pap.project.piranhas.dao;

import pap.project.piranhas.model.AppUser;

public interface UsersDAO {

    AppUser findByUserName(String username);

    int registerUser(String userName, String password, String emailAddress);
    int addUserToGroup(String userName, String groupName);
    int createGroup(String groupName);

}
