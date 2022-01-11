import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../components/InputText/InputText";
import { SignForm } from "../../components/UI/SignForm/SignForm";

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
    <SignForm title="Sign In" btnText="SIGN IN">
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
<<<<<<< HEAD
    </SignForm>
=======
      <CustomButton onClick={handleSignIn} type="submit">
        SIGN IN
      </CustomButton>
    </div>
>>>>>>> master
  );
};

export default SiginIn;
