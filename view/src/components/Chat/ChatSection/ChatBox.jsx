import { Box } from "@mui/material";
import React from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useAuth } from "../../../Context/AccountProvider";

const ChatBox = () => {
  const { person } = useAuth();
  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
};

export default ChatBox;
