import React from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { useIsLogged } from "../LoginContext/LoginContext";
import s from "./Header.module.scss";

const Header = () => {
  const handleLogOut = () => {
    AuthService.logout();
    setIsLogged(false);
    window.location.reload();
  };

  const [isLogged, setIsLogged] = useIsLogged();
  return isLogged ? (
    <PrivateHeader handleLogOut={handleLogOut} />
  ) : (
    <PublicHeader />
  );
};

const PrivateHeader = ({ handleLogOut }) => (
  <div className={s.header}>
    <NavLink className={s.logoContainer} to="/">
      <img alt="piranha" className={s.logo} src="/assets/piranha.png" />
      <h1 className={s.title}>Piranhas</h1>
    </NavLink>
    <ul className={s.categories}>
      <li>
        <NavLink
          exact
          to="/my-courses"
          className={s.category}
          activeClassName={s.active}
        >
          My Courses
        </NavLink>
      </li>

      <li>
        <NavLink
          exact
          to="/market"
          className={s.category}
          activeClassName={s.active}
        >
          Market
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/card-form"
          className={s.category}
          activeClassName={s.active}
        >
          Card Form
        </NavLink>
      </li>
    </ul>
    <div className={s.categories}>
      <p className={s.logOut} onClick={handleLogOut}>
        Log Out
      </p>
    </div>
  </div>
);

const PublicHeader = () => (
  <div className={s.header}>
    <NavLink className={s.logoContainer} to="/">
      <img alt="piranha" className={s.logo} src="/assets/piranha.png" />
      <h1 className={s.title}>Piranhas</h1>
    </NavLink>
    <ul className={s.categories}>
      <li>
        <NavLink
          exact
          to="/market"
          className={s.category}
          activeClassName={s.active}
        >
          Market
        </NavLink>
      </li>
    </ul>
    <div className={s.categories}>
      <NavLink to="/signIn" className={s.category}>
        Sign In
      </NavLink>
      <NavLink to="/signUp" className={s.category}>
        Sign Up
      </NavLink>
    </div>
  </div>
);

export default Header;
