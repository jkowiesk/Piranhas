import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../components/InputText/InputText";
import CustomButton from "../../components/CustomButton/CustomButton";
import AuthService from "../../services/AuthService";
import { useIsLogged } from "../../components/LoginContext/LoginContext";

import s from "./SignIn.module.scss";

const SiginIn = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [IsLogged, setIsLogged] = useIsLogged();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAccount((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSignIn = (e) => {
    AuthService.login(account.username, account.password)
      .then((response) => {
        setIsLogged(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  };

  return (
    <div className={s.signIn}>
      <h2>Sign In</h2>
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
      <CustomButton onClick={handleSignIn} type="submit">
        SIGN IN
      </CustomButton>
    </div>
  );
};

export default SiginIn;
