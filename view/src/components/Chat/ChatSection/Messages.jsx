import React from "react";
import useAuth from "../../../Context/AccountProvider";
import { Box, styled } from "@mui/material";

import { images } from "../../../Constants/Data";
import ChatFooter from "./ChatFooter";

const Wrapper = styled(Box)`
  background-image: url(${images.backgroundImage});
  background-size: 40%;
`;
const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ person }) => {
  const { account } = useAuth();
  const sendText = (e) => {
    console.log("sendText", e);
    const code = e.keycode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: person.conversationId,
      };
    }
  };
  return (
    <Wrapper>
      <Component></Component>
      <ChatFooter sendText={sendText} />
    </Wrapper>
  );
};

export default Messages;
