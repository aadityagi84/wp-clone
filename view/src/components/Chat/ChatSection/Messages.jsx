import React from "react";
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

const Messages = () => {
  return (
    <Wrapper>
      <Component></Component>
      <ChatFooter />
    </Wrapper>
  );
};

export default Messages;
