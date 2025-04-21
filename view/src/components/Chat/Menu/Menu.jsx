import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Users from "./Users";
import Search from "./Search";

const Menu = () => {
  return (
    <div>
      <Box>
        <Header />
        <Search />
        <Users />
      </Box>
    </div>
  );
};

export default Menu;
