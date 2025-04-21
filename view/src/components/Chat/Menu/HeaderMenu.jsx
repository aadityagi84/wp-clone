import { Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";

const MenuOption = styled(MenuItem)`
  fontsize: 14px;
  padding: 10px 30px 5px 20px;
  color: #4a4a4a;
`;

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleClose = () => {
    setIsOpen(null);
  };
  const handleClick = (e) => {
    setIsOpen(e.currentTarget);
  };
  return (
    <div>
      <IoMdMore className="text-[25px]" onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={isOpen}
        keepMounted
        open={isOpen}
        onClose={handleClose}
        // getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center ",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </div>
  );
};

export default HeaderMenu;
