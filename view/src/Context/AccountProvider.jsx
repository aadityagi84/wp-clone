import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// const AccountProvider = ({ children }) => {
const AccountProvider = ({ children } = {}) => {
  const [account, setAccount] = useState("");
  const [person, setPerson] = useState({});
  return (
    <AuthContext.Provider value={{ account, setAccount, setPerson, person }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AccountProvider;
export const useAuth = () => useContext(AuthContext);
