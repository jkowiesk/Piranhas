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
        <li>
          <NavLink exact to="add-card" className={s.category} activeClassName={s.active}>
            Add Card
          </NavLink>
        </li>
        <li>
          <NavLink exact to="my-courses" className={s.category} activeClassName={s.active}>
            My Courses
          </NavLink>
        </li>
        <li>
          <NavLink exact to="marketCourses" className={s.category} activeClassName={s.active}>
            Market Courses
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
