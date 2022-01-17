package pap.project.piranhas.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pap.project.piranhas.model.AppUser;
import pap.project.piranhas.model.Course;
import pap.project.piranhas.model.Flashcard;
import pap.project.piranhas.model.Set;

import java.sql.*;


import java.util.ArrayList;
import java.util.List;

@Repository("DBContext")
class DBContext implements AutoCloseable {
    private Connection conn = null;
    private String url = "jdbc:oracle:thin:@//ora4.ii.pw.edu.pl:1521/pdb1.ii.pw.edu.pl";
    private String username = "z21";
    private String password = "nzezcs";

    public Connection getConnection() throws SQLException {
        if (conn == null) {
            System.out.println("Connecting to the database...");
            conn = DriverManager.getConnection(url, username, password);
        }
        return conn;
    }

    public void close() {
        if (conn != null) {
            try {
                System.out.println("Closing connection...");
                conn.close();
            } catch (SQLException e) {
                System.out.println(e);
            }
            conn = null;
        }
    }

}

@Repository("oracleDao")
public class OracleDataAccessObject implements FlashcardsDAO, UsersDAO {

    private DBContext database;

    @Autowired
    public OracleDataAccessObject(DBContext database) {
        this.database = database;
    }

    @Override
    public Set getSetByName(String setName) {
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM sets WHERE name = ?");
            pstmt.setString(1, setName);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            Set set = new Set(rs.getString(2));
            int setId = rs.getInt(1);
            pstmt.close();


            pstmt = conn.prepareStatement("SELECT * FROM flashcards WHERE set_id = ?");
            pstmt.setInt(1, setId);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                Flashcard flashcard = new Flashcard(rs.getString(2), rs.getString(3));
                set.addFlashcard(flashcard);
            }
            pstmt.close();
            database.close();
            return set;

        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public Set getSetByNameSecure(String setName, String userName) {
        try {
            Connection conn = database.getConnection();

            int userId = 0;
            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE user_name = ?");
            pstmt.setString(1, userName);
            ResultSet urs = pstmt.executeQuery();
            urs.next();
            userId = urs.getInt(1);

            pstmt = conn.prepareStatement("SELECT * FROM sets WHERE name = ? AND (owner_id = ? OR private=0)");
            pstmt.setString(1, setName);
            pstmt.setInt(2, userId);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            Set set = new Set(rs.getString(2));
            if (rs.getInt(5) == 1) set.setPrivacy(Set.privacyPolicy.Private);
            else set.setPrivacy(Set.privacyPolicy.Public);
            int setId = rs.getInt(1);
            pstmt.close();


            pstmt = conn.prepareStatement("SELECT * FROM flashcards WHERE set_id = ?");
            pstmt.setInt(1, setId);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                Flashcard flashcard = new Flashcard(rs.getString(2), rs.getString(3));
                set.addFlashcard(flashcard);
            }
            pstmt.close();
            database.close();
            return set;

        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public List<Set> getAllPublicSets() {

        try {
            Connection conn = database.getConnection();

            List<Set> publicSets = new ArrayList<Set>();

            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM sets WHERE private = 0");
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int set_id = rs.getInt(1);
                String set_name = rs.getString(2);
                Set set = new Set(set_name);

                PreparedStatement fpstmt = conn.prepareStatement("SELECT * FROM flashcards WHERE set_id = ?");
                fpstmt.setInt(1, set_id);
                ResultSet frs = fpstmt.executeQuery();

                while (frs.next()) {
                    Flashcard flashcard = new Flashcard(frs.getString(2), frs.getString(3));
                    set.addFlashcard(flashcard);
                }

                publicSets.add(set);

            }
            pstmt.close();
            database.close();
            return publicSets;




        } catch (SQLException e) {

            System.out.println(e);
            return null;
        }
    }

    @Override
    public List<Set> getAllUserSets(String userName) {
        List<Set> userSets = new ArrayList<Set>();
        try {
            Connection conn = database.getConnection();

            int user_id = 0;
            PreparedStatement upstmt = conn.prepareStatement("SELECT * FROM users WHERE user_name = ?");
            upstmt.setString(1, userName);
            ResultSet urs = upstmt.executeQuery();
            urs.next();
            user_id = urs.getInt(1);
            PreparedStatement pstmt = conn.prepareStatement("SELECT set_id, s.name, c.name, s.private FROM sets s " +
                    "JOIN course_sets cs USING(set_id) " +
                    "JOIN courses c ON(cs.course_id = c.course_id) " +
                    "WHERE s.owner_id = ?");
            pstmt.setInt(1, user_id);
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int set_id = rs.getInt(1);
                String set_name = rs.getString(2);
                Set set = new Set(set_name);
                set.setCourseName(rs.getString(3));
                if (rs.getInt(4) == 1) set.setPrivacy(Set.privacyPolicy.Private);
                else set.setPrivacy(Set.privacyPolicy.Public);

                PreparedStatement fpstmt = conn.prepareStatement("SELECT * FROM flashcards WHERE set_id = ?");
                fpstmt.setInt(1, set_id);
                ResultSet frs = fpstmt.executeQuery();

                while (frs.next()) {
                    Flashcard flashcard = new Flashcard(frs.getString(2), frs.getString(3));
                    set.addFlashcard(flashcard);
                }

                userSets.add(set);

            }
            pstmt.close();
            database.close();


        } catch (SQLException e) {
            System.out.println(e);
        }
        return userSets;
    }

    @Override
    public Course getCourse(String courseName) {
        Course course = new Course("test");
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement("SELECT set_id, s.name, c.name, s.private " +
                    "FROM sets s " +
                    "JOIN course_sets cs USING(set_id) " +
                    "JOIN courses c USING(course_id) " +
                    "WHERE c.name = ?");
            pstmt.setString(1, courseName);
            ResultSet rs = pstmt.executeQuery();
            while(rs.next()) {
                int set_id = rs.getInt(1);
                Set set = new Set(rs.getString(2));
                set.setCourseName(rs.getString(3));
                if (rs.getInt(4) == 1) set.setPrivacy(Set.privacyPolicy.Private);
                else set.setPrivacy(Set.privacyPolicy.Public);

                PreparedStatement fpstmt = conn.prepareStatement("SELECT * FROM flashcards WHERE set_id = ?");
                fpstmt.setInt(1, set_id);
                ResultSet frs = fpstmt.executeQuery();

                while (frs.next()) {
                    Flashcard flashcard = new Flashcard(frs.getString(2), frs.getString(3));
                    set.addFlashcard(flashcard);
                }
                fpstmt.close();
                System.out.println(set.getName());
                course.addSet(set);
            }

            pstmt.close();
            database.close();

        } catch (SQLException e) {
            System.out.println(e);
        }
        return course;
    }

    @Override
    public List<Course> getAllUserCourses(String userName) {
        List<Course> userCourses = new ArrayList<>();
        try {
            Connection conn = database.getConnection();

            int user_id = 0;
            PreparedStatement upstmt = conn.prepareStatement("SELECT * FROM users WHERE user_name = ?");
            upstmt.setString(1, userName);
            ResultSet urs = upstmt.executeQuery();
            urs.next();
            user_id = urs.getInt(1);

            PreparedStatement cpstmt = conn.prepareStatement("SELECT  course_id, name FROM courses WHERE owner_id = ?");
            cpstmt.setInt(1, user_id);
            ResultSet crs = cpstmt.executeQuery();
            while (crs.next()) {
                Course course = new Course(crs.getString(2));

                PreparedStatement pstmt = conn.prepareStatement("SELECT set_id, s.name, c.name, s.private " +
                        "FROM sets s JOIN course_sets cs USING(set_id) " +
                        "JOIN courses c USING(course_id) " +
                        "WHERE course_id = ?");
                pstmt.setInt(1, crs.getInt(1));
                ResultSet rs = pstmt.executeQuery();
                while(rs.next()) {
                    int set_id = rs.getInt(1);
                    Set set = new Set(rs.getString(2));
                    set.setCourseName(rs.getString(3));
                    if (rs.getInt(4) == 1) set.setPrivacy(Set.privacyPolicy.Private);
                    else set.setPrivacy(Set.privacyPolicy.Public);

                    PreparedStatement fpstmt = conn.prepareStatement("SELECT * FROM flashcards WHERE set_id = ?");
                    fpstmt.setInt(1, set_id);
                    ResultSet frs = fpstmt.executeQuery();

                    while (frs.next()) {
                        Flashcard flashcard = new Flashcard(frs.getString(2), frs.getString(3));
                        set.addFlashcard(flashcard);
                    }
                    fpstmt.close();
                    course.addSet(set);
                }
                pstmt.close();
                userCourses.add(course);
            }
            cpstmt.close();

        } catch (SQLException e) {
            System.out.println(e);
        }
        return userCourses;
    }

    @Override
    public int addFlashcardToSet(String setName, String front, String back) {
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM sets WHERE name = ?");
            pstmt.setString(1, setName);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            int setId = rs.getInt(1);
            pstmt.close();

            pstmt = conn.prepareStatement(
                    "INSERT INTO flashcards (phrase, definition, set_id) VALUES (?, ?, ?)"
            );
            pstmt.setString(1, front);
            pstmt.setString(2, back);
            pstmt.setInt(3, setId);
            pstmt.executeUpdate();
            System.out.println(front+ " " + " " + back + " " + setId);


            return 0;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }


    @Override
    public int createCourse(String courseName, String userName) {
        try {
            Connection conn = database.getConnection();

            int userId = 0;
            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE user_name = ?");
            pstmt.setString(1, userName);
            ResultSet urs = pstmt.executeQuery();
            urs.next();
            userId = urs.getInt(1);

            pstmt = conn.prepareStatement("INSERT INTO courses (name, owner_id) VALUES (?, ?)");
            pstmt.setString(1, courseName);
            pstmt.setInt(2, userId);
            pstmt.executeUpdate();

            System.out.println(courseName + "   " + userId);

            return 0;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    @Override
    public int setSetPrivacy(int priv, String setName, String userName) {
        try {
            Connection conn = database.getConnection();

            int userId = 0;
            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE user_name = ?");
            pstmt.setString(1, userName);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            userId = rs.getInt(1);

            pstmt = conn.prepareStatement("SELECT * FROM sets WHERE name = ? AND owner_id = ?");
            pstmt.setString(1, setName);
            rs = pstmt.executeQuery();
            rs.next();
            int setId = rs.getInt(1);

            pstmt= conn.prepareStatement("UPADATE sets SET private = ? WHERE set_id = ?");
            pstmt.setInt(1, priv);
            pstmt.setInt(2, setId);
            pstmt.executeUpdate();
            pstmt.close();
            database.close();

            return 0;


        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }

    }

    @Override
    public int addSetToCourse(String setName, int isPrivate, String courseName) {
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement("SELECT course_id, owner_id FROM courses WHERE name = ?");
            pstmt.setString(1, courseName);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            int courseId = rs.getInt(1);
            int ownerId = rs.getInt(2);

            pstmt = conn.prepareStatement(
                    "INSERT INTO sets (name, private, owner_id) VALUES (?, ?, ?)"
            );
            pstmt.setString(1, setName);
            pstmt.setInt(2, isPrivate);
            pstmt.setInt(3, ownerId);
            pstmt.executeUpdate();

            pstmt = conn.prepareStatement("SELECT set_id FROM sets WHERE name = ?");
            pstmt.setString(1, setName);
            rs = pstmt.executeQuery();
            rs.next();
            int setId = rs.getInt(1);

            pstmt = conn.prepareStatement("INSERT INTO course_sets (course_id, set_id) VALUES (?, ?)");
            pstmt.setInt(1, courseId);
            pstmt.setInt(2, setId);
            pstmt.executeUpdate();
            System.out.println(courseId + "   " + setId);

            return 0;

        } catch (SQLException e) {
            System.out.println(e);

            return  -1;
        }
    }

    @Override
    public AppUser findByUserName(String username) {
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE user_name = ?");
            pstmt.setString(1, username);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            AppUser user = new AppUser(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4));
            pstmt.close();

            return user;
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }

    }

    @Override
    public int registerUser(String userName, String password, String emailAddress) {
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement(
                    "INSERT INTO users (user_name, password, email) VALUES (?, ?, ?)"
            );
            pstmt.setString(1, userName);
            pstmt.setString(2, password);
            pstmt.setString(3, emailAddress);
            pstmt.executeUpdate();

            return 0;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }

    }

    @Override
    public int addUserToGroup(String userName, String groupName) {
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM users WHERE user_name = ?");
            pstmt.setString(1, userName);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            int userId = rs.getInt(1);
            pstmt.close();

            pstmt = conn.prepareStatement("SELECT * FROM groups WHERE name = ?");
            pstmt.setString(1, groupName);
            rs = pstmt.executeQuery();
            rs.next();
            int groupId = rs.getInt(1);
            pstmt.close();

            pstmt = conn.prepareStatement(
                    "INSERT INTO group_users (group_id, user_id) VALUES (?, ?)"
            );
            pstmt.setInt(1, groupId);
            pstmt.setInt(2, userId);

            pstmt.executeUpdate();

            return 0;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }

    @Override
    public int createGroup(String groupName) {
        try {
            Connection conn = database.getConnection();

            PreparedStatement pstmt = conn.prepareStatement(
                    "INSERT INTO groups (name) VALUES (?)"
            );
            pstmt.setString(1, groupName);
            pstmt.executeUpdate();

            return 0;
        } catch (SQLException e) {
            System.out.println(e);
            return -1;
        }
    }
}
