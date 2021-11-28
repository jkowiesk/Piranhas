import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="x">
        <img alt="piranha" className="logo" src="/assets/piranha.png" />
      </Link>
      <div className="categories">
        <Link className="category" to="d">
          Card Manager
        </Link>
      </div>
    </div>
  );
}

export default Header;