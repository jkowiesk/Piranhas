DROP TABLE group_users;
DROP TABLE groups;
DROP TABLE flashcards;
DROP TABLE course_sets;
DROP TABLE sets;
DROP TABLE courses;
DROP TABLE users;
DROP TABLE classes;
DROP TABLE schools;
DROP TABLE addresses;
DROP TABLE cities;
DROP TABLE countries;


CREATE TABLE countries (
    country_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR(10),
    region VARCHAR(10)
);

CREATE TABLE cities (
    city_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR(10),
    country_id NUMBER(4),
    FOREIGN KEY (country_id) REFERENCES countries(country_id)
);

CREATE TABLE addresses (
    address_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR(30),
    street_number NUMBER(4),
    postal_code VARCHAR(10),
    city_id NUMBER(4),
    FOREIGN KEY(city_id) REFERENCES cities(city_id)
); 

CREATE TABLE schools (
    school_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR2(40),
    patron VARCHAR2(40),
    address_id NUMBER(4),
    FOREIGN KEY(address_id) REFERENCES addresses(address_id)
);

CREATE TABLE classes (
    class_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR2(20),
    class_number NUMBER(4),
    school_id NUMBER(4),
    FOREIGN KEY(school_id) REFERENCES schools(school_id)
);

CREATE TABLE users (
    user_id NUMBER(6) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    user_name VARCHAR2(30) NOT NULL,
    password VARCHAR2(30) NOT NULL,
    email VARCHAR2(30),
    class_id NUMBER(4),
    FOREIGN KEY(class_id) REFERENCES classes(class_id)
);

CREATE TABLE courses (
    course_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR2(30) NOT NULL,
    description VARCHAR2(100),
    owner_id NUMBER(6) NOT NULL REFERENCES users (user_id)
);

CREATE TABLE sets (
    set_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR2(30) NOT NULL,
    creation_date date DEFAULT SYSDATE,
    private NUMBER(1) DEFAULT 0 NOT NULL,
    description VARCHAR2(100),
    owner_id NUMBER(6) DEFAULT NULL REFERENCES users (user_id)
);

CREATE TABLE course_sets (
    cs_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    course_id NUMBER(4),
    set_id NUMBER(6),
    FOREIGN KEY(course_id) REFERENCES courses(course_id),
    FOREIGN KEY(set_id) REFERENCES sets(set_id)
);


CREATE TABLE flashcards (
    flashcard_id NUMBER(6) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    phrase VARCHAR2(50),
    definition VARCHAR2(50),
    set_id NUMBER(6),
    FOREIGN KEY(set_id) REFERENCES sets(set_id)
);

CREATE TABLE groups (
    group_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    name VARCHAR2(30) NOT NULL,
    description VARCHAR2(100)

);

CREATE TABLE group_users (
    gu_id NUMBER(4) GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1) PRIMARY KEY,
    group_id NUMBER(4) NOT NULL,
    user_id NUMBER(6) NOT NULL,
    FOREIGN KEY(group_id) REFERENCES groups(group_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

ALTER TABLE sets ADD CONSTRAINT unique_name UNIQUE(name);
COMMIT;