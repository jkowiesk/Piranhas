INSERT INTO countries (name, region) VALUES ('Polska', 'Europa');

INSERT INTO cities (name, country_id) VALUES ('Sosnowiec', 1);
INSERT INTO cities (name, country_id) VALUES ('Siedlce', 1);

INSERT INTO addresses (name, street_number, postal_code, city_id) VALUES ('plac Zillingera', 1, '41-200', 1);
INSERT INTO addresses (name, street_number, postal_code, city_id) VALUES ('Floriańska', 10, '08-110', 2);

INSERT INTO schools (name, patron, address_id) VALUES ('IV Liceum Ogólnokształcące', 'Stanisław Staszic', 1);
INSERT INTO schools (name, patron, address_id) VALUES ('I Liceum Ogólnokształcące', 'Bolesław Prus', 2);

INSERT INTO classes (name, class_number, school_id) VALUES ('A', 3, 2);
INSERT INTO classes (name, class_number, school_id) VALUES ('F', 1, 1);

INSERT INTO users (user_name, password, email, class_id) VALUES ('marek89', 'marek89', 'marek89@wp.pl', 1);
INSERT INTO users (user_name, password, email, class_id) VALUES ('franek', 'franek', 'franek@gmail.com', 2);

INSERT INTO sets (name, private, owner_id) VALUES ('przyroda', 1, 2);
INSERT INTO sets (name, private, owner_id) VALUES ('English', 1, 1);
INSERT INTO sets (name, private, owner_id) VALUES ('znaki drogowe', 1, 2);
INSERT INTO sets (name, private, owner_id) VALUES ('podróżowanie', 1, 1);
INSERT INTO sets (name, private) values ('zbiorniki wodne', 0);
INSERT INTO sets (name, description) VALUES ('rodzina', 'angielskie nazwy czlonkow rodziny');

INSERT INTO flashcards (phrase, definition, set_id) VALUES ('drzewo', 'tree', 1);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('kwiat', 'flower', 1);

INSERT INTO flashcards (phrase, definition, set_id) VALUES ('córka', 'daughter', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('kot', 'cat', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('pies', 'dog', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('wilk', 'wolf', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('lis', 'fox', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('ptak', 'bird', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('matka', 'mother', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('syn', 'son', 2);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('kot', 'cat', 2);

INSERT INTO flashcards (phrase, definition, set_id) VALUES ('niebieski, okrągły', 'nakazu', 3);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('czerwony, okrągły', 'zakazu', 3);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('czerwony, prostokąt', 'informacyjny', 3);

INSERT INTO flashcards (phrase, definition, set_id) VALUES ('Bydgoszcz', 'piękne miasto', 4);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('Koloseum', 'amfiteatr w Rzymie', 4);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('Wieża Eiffla', 'najwyższa budowla w Paryżu', 4);

INSERT INTO flashcards (phrase, definition, set_id) VALUES ('Balaton', 'Sosnowcu', 5);
INSERT INTO flashcards (phrase, definition, set_id) VALUES ('Jezioro Czorsztyńskie', 'Dunajec', 5);

INSERT INTO courses (name,  owner_id) VALUES ('szkoła',  2);
INSERT INTO courses (name,  owner_id) VALUES ('świat',  1);

INSERT INTO course_sets (course_id, set_id) VALUES (1, 1);
INSERT INTO course_sets (course_id, set_id) VALUES (1, 2);
INSERT INTO course_sets (course_id, set_id) VALUES (2, 3);
INSERT INTO course_sets (course_id, set_id) VALUES (2, 4);

COMMIT;
