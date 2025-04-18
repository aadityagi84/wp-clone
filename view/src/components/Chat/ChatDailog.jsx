import { Box, Dialog, styled } from "@mui/material";
import React from "react";
import Menu from "./Menu/Menu";
import EmptyChat from "./ChatSection/EmptyChat";

const ChatDailog = () => {
  const dailogStyle = {
    height: "96%",
    width: "98%",
    maxWidth: "100%",
    boxShadow: "none",
    overflow: "hidden",
    maxHeight: "100%",
    display: "flex",
    margin: "auto",
    borderRadius: "none",
    alignItems: "center",
  };

  const Component = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100%",
    gap: "20px",
    margin: "0 auto",
    // paddingLeft: "15px",
    width: "100%",
    // For demonstration (remove later)
    // border: "2px solid red",

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "20%,1fr",
      paddingLeft: "10px",
      gap: "10px",
    },
  }));

  const LeftComponents = styled(Box)`
    min-width: 450px;
  `;
  const RightComponents = styled(Box)`
    width: 73%;
    min-width: 300px;
    borderleft: 1px solid (0, 0, 0, 0.14);
  `;

  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{ sx: dailogStyle }}
        hideBackdrop
        maxWidth="md"
      >
        <Component>
          <LeftComponents>
            <Menu />
          </LeftComponents>
          <RightComponents>
            <EmptyChat />
          </RightComponents>
        </Component>
      </Dialog>
    </div>
  );
};

export default ChatDailog;
