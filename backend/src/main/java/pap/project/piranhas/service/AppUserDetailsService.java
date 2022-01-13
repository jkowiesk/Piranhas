package pap.project.piranhas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import pap.project.piranhas.dao.UsersDAO;
import pap.project.piranhas.model.AppUser;

import java.util.ArrayList;

@Service
public class AppUserDetailsService implements UserDetailsService {

    private final UsersDAO usersDAO;

    @Autowired
    public AppUserDetailsService(@Qualifier("oracleDao") UsersDAO usersDAO) {this.usersDAO = usersDAO;}

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = usersDAO.findByUserName(username);
        return new User(user.getUserName(), user.getPassword(), new ArrayList<>());

    }

    public int registerUser(String userName, String password, String emailAddress) {
        return usersDAO.registerUser(userName, password, emailAddress);
    }

}
