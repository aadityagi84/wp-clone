import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useAuth } from "../../../Context/AccountProvider";
import { getConversation } from "../../../services/api";

const ChatBox = () => {
  const { account, person } = useAuth();
  useEffect(() => {
    const getConverationId = async () => {
      let data = await getConversation({
        senderId: account.sub,
        reciverId: person.sub,
      });
    };
    getConverationId();
  }, []);

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
};

export default ChatBox;
