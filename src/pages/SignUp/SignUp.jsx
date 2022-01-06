import { useState } from "react";
import InputText from "../../components/InputText/InputText";
import CustomButton from "../../components/CustomButton/CustomButton";

import s from "./SignUp.module.scss";

const SiginIn = () => {
  const [account, setAccount] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAccount((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className={s.signUp}>
      <h2>Sign Up</h2>
      <InputText
        type="email"
        label="email"
        value={account.email}
        handleChange={handleChange}
      />
      <InputText
        type="text"
        label="username"
        value={account.username}
        handleChange={handleChange}
      />
      <InputText
        type="password"
        label="password"
        value={account.password}
        handleChange={handleChange}
      />
      <CustomButton type="submit">SIGN UP</CustomButton>
    </div>
  );
};

export default SiginIn;
