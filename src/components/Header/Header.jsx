import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink className={s.logoContainer} to="/">
        <img alt="piranha" className={s.logo} src="/assets/piranha.png" />
      </NavLink>
      <ul className={s.categories}>
        {/* <li>
          <NavLink to="" className={s.category} activeClassName={s.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="add-card" className={s.category} activeClassName={s.active}>
            Add Card
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="my-courses"
            className={s.category}
            activeClassName={s.active}
          >
            My Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="marketCourses"
            className={s.category}
            activeClassName={s.active}
          >
            Market Courses
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
