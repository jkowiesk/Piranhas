import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img alt="piranha" className="logo" src="/assets/piranha.png" />
      </Link>
      <div className="categories">
        <Link className="category" to="my-courses">
          My Courses
        </Link>
        <Link className="category" to="marketCourses">
          Market Courses
        </Link>
      </div>
    </div>
  );
}

export default Header;
