import { Box, Drawer, styled, Typography } from "@mui/material";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Profile from "./Profile";

const Header = styled(Box)`
  background-color: #008069;
  height: 107px;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        open={open}
        onClose={handleClose}
        anchor="left"
        PaperProps={{
          sx: {
            position: "fixed",
            left: "1%",
            top: "2%",
            boxShadow: "none",
            width: "30%",
            height: "96%",
          },
        }}
        style={{ zIndex: 99999 }}
      >
        <Header>
          <FaArrowLeftLong
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
          <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </div>
  );
};

export default InfoDrawer;
