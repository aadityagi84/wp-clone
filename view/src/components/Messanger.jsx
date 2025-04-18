import React from "react";
import LoginDailog from "./Auth/LoginDailog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, styled } from "@mui/material";
import ChatDailog from "./Chat/ChatDailog";
import { useAuth } from "../Context/AccountProvider";
const Messanger = () => {
  const Box = styled("div")({
    backgroundColor: "#dcdcdc",
    height: "100vh",
  });
  const Header = styled(AppBar)({
    backgroundColor: "#00bfa5",
    height: "250px",
    boxShadow: "none",
  });

  const ChatHeader = styled(AppBar)({
    backgroundColor: "#00a884",
    height: "125px",
    boxShadow: "none",
  });

  const { account } = useAuth();
  return (
    <Box>
      {account ? (
        <>
          <ChatHeader>
            <Toolbar></Toolbar>
          </ChatHeader>
          <ChatDailog />
        </>
      ) : (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <LoginDailog />
        </>
      )}
    </Box>
  );
};

export default Messanger;
