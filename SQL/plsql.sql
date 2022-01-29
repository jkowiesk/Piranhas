CREATE OR REPLACE FUNCTION count_flashcards_in_course(c_id NUMBER)
RETURN NUMBER
AS
    v_flashcards NUMBER := 0;
    v_total_flashcards NUMBER := 0;
BEGIN

    FOR data IN (SELECT set_id FROM course_sets WHERE course_id = c_id) LOOP
        SELECT COUNT(flashcard_id) INTO v_flashcards FROM flashcards where set_id = data.set_id;
        v_total_flashcards := v_total_flashcards + v_flashcards;
    END LOOP;
    RETURN v_total_flashcards;
    
END;
/
CREATE OR REPLACE FUNCTION count_flashcards_in_set(s_id NUMBER)
RETURN NUMBER
AS
    v_amount NUMBER;
BEGIN
    SELECT COUNT(*) INTO v_amount FROM flashcards GROUP BY set_id HAVING set_id = s_id;
    RETURN v_amount;
END;
/
CREATE OR REPLACE PROCEDURE change_course(s_id NUMBER, c_id NUMBER, new_c_id NUMBER)
AS
    v_cs_id         NUMBER;
    v_set_owner     NUMBER;
    v_course_owner  NUMBER;
BEGIN
    SELECT owner_id INTO v_set_owner FROM sets WHERE set_id = s_id;
    SELECT owner_id INTO v_course_owner FROM courses WHERE course_id = new_c_id;
    
    IF v_set_owner = v_course_owner THEN
        SELECT cs_id INTO v_cs_id FROM course_sets WHERE set_id = s_id AND course_id = c_id;
        UPDATE course_sets SET course_id = new_c_id WHERE cs_id = v_cs_id;
        commit;
    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'set owner and new course owner must match');
    END IF;
END;
/
CREATE OR REPLACE PROCEDURE join_group(u_id NUMBER, g_id NUMBER)
AS
    v_gu_id NUMBER;
BEGIN
    SELECT gu_id INTO v_gu_id FROM group_users WHERE user_id = u_id AND group_id = g_id;
    --IF v_gu_id IS NOT NULL THEN
    RAISE_APPLICATION_ERROR(-20003, 'User is already a member of this group');
EXCEPTION
    WHEN no_data_found THEN
        INSERT INTO group_users(group_id, user_id) VALUES(g_id, u_id);
        dbms_output.put_line('Group successfully joined.');
END;
/
CREATE OR REPLACE TRIGGER tg_check_password
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    IF LENGTH(:NEW.password) < 8 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Password too weak');
    END IF;
END;
/
CREATE OR REPLACE TRIGGER tg_join_group
BEFORE INSERT ON group_users 
FOR EACH ROW
DECLARE 
    members     NUMBER;
BEGIN 
    SELECT COUNT(*) INTO members FROM group_users WHERE group_id = :new.group_id;
    IF members > 5 THEN
        RAISE_APPLICATION_ERROR(-20003, 'Group member limit reached');
    END IF;
END;



















