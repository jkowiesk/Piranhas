import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import s from "./AddCardButton.module.scss";

const AddCardButton = ({ link }) => {
  return (
    <NavLink className={s.wrapper} to={link}>
      <h1>+</h1>
    </NavLink>
  );
};

export default AddCardButton;
