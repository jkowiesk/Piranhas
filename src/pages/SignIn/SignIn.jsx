import { useState } from "react";
import InputText from "../../components/InputText/InputText";
import s from "./SignIn.module.scss";
import CustomButton from "../../components/CustomButton/CustomButton";

const SiginIn = () => {
  const [account, setAccount] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAccount((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className={s.signIn}>
      <h2>Sign In</h2>
      <InputText
        type="text"
        label="email"
        value={account.email}
        handleChange={handleChange}
      />
      <InputText
        type="password"
        label="password"
        value={account.password}
        handleChange={handleChange}
      />
      <CustomButton type="submit">SIGN IN</CustomButton>
    </div>
  );
};

export default SiginIn;
