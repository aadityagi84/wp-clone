import React from "react";
import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";

const App = () => {
  const clientid = `578610756932-q7dp003ulmojk3vd0u09nets3ub4paso.apps.googleusercontent.com`;
  return (
    <div>
      <GoogleOAuthProvider clientId={clientid}>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
