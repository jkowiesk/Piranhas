import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../components/InputText/InputText";
import { useIsLogged } from "../../components/LoginContext/LoginContext";
import { SignForm } from "../../components/UI/SignForm/SignForm";
import AuthService from "../../services/AuthService";

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

  const onError = (error) => {
    console.log(error);
    navigate("/");
  };

  const onSuccess = (response) => {
    setIsLogged(true);
    navigate("/");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    AuthService.login(account.username, account.password, onSuccess, onError);
  };

  return (
    <SignForm title="Sign In" btnText="SIGN IN" onBtnClick={handleSignIn}>
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
    </SignForm>
  );
};

export default SiginIn;
