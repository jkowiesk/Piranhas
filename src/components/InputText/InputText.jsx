import { useState } from "react";

import s from "./InputText.module.scss";

const InputText = ({ label, type, value, handleChange }) => {
  return (
    <div className={s.root}>
      <input
        type={type}
        name={label}
        className={s.inputText}
        onChange={handleChange}
      />
      {label && (
        <label className={`${s.inputLabel} ${value ? s.shrink : ""}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default InputText;
