import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import InputText from "../../components/InputText/InputText";
import { SignForm } from "../../components/UI/SignForm/SignForm";
import AuthService from "../../services/AuthService";

const SiginIn = () => {
  const [account, setAccount] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAccount((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    AuthService.register(account.email, account.username, account.password)
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error)
        navigate('/');
      })

  }

  return (
    <SignForm title="Sign Up" btnText="SIGN UP" onBtnClick={handleSignUp}>
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
    </SignForm>
  );
};

export default SiginIn;
