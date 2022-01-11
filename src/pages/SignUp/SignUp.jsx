import { useState } from "react";
import InputText from "../../components/InputText/InputText";
import { SignForm } from "../../components/UI/SignForm/SignForm";

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
    <SignForm title="Sign Up" btnText="SIGN UP">
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
