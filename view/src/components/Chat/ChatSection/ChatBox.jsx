import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useAuth } from "../../../Context/AccountProvider";
import { getConversation } from "../../../services/api";

const ChatBox = () => {
  const { account, person } = useAuth();
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConverationId = async () => {
      if (account?.sub && person?.sub) {
        console.log("Fetching with:", account.sub, person.sub);
        let data = await getConversation({
          senderId: account.sub,
          receiverId: person.sub,
        });
        setConversation(data?.data); // use `data.data`
      }
    };
    getConverationId();
  }, [account?.sub, person?.sub]);

  return (
    <Box>
      <ChatHeader person={person} account={account} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
