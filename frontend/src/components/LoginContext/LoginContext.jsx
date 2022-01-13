import React, { useState, useEffect, useContext } from "react";
import AuthService from "../../services/AuthService";

const LoginContext = React.createContext();

const useIsLogged = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(AuthService.isLogged());

  return (
    <LoginContext.Provider value={[isLogged, setIsLogged]}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, useIsLogged };
