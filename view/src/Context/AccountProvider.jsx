import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  return (
    <AuthContext.Provider value={{ account, setAccount }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AccountProvider;
export const useAuth = () => useContext(AuthContext);
