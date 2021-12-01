import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink className={s.logoContainer} to="/">
        <img alt="piranha" className={s.logo} src="/assets/piranha.png" />
        <h1 className={s.title}>Piranhas</h1>
      </NavLink>
      <ul className={s.categories}>
<<<<<<< HEAD
        <li>
          <NavLink exact to="add-card" className={s.category} activeClassName={s.active}>
=======
        {/* <li>
          <NavLink to="" className={s.category} activeClassName={s.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="add-card" className={s.category} activeClassName={s.active}>
>>>>>>> master
            Add Card
          </NavLink>
        </li> */}
        <li>
<<<<<<< HEAD
          <NavLink exact to="my-courses" className={s.category} activeClassName={s.active}>
=======
          <NavLink
            to="my-courses"
            className={s.category}
            activeClassName={s.active}
          >
>>>>>>> master
            My Courses
          </NavLink>
        </li>
        <li>
<<<<<<< HEAD
          <NavLink exact to="marketCourses" className={s.category} activeClassName={s.active}>
=======
          <NavLink
            to="marketCourses"
            className={s.category}
            activeClassName={s.active}
          >
>>>>>>> master
            Market Courses
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
