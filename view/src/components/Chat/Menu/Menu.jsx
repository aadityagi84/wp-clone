import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import Users from "./Users";
import Search from "./Search";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <Box>
        <Header />
        <Search setText={setText} text={text} />
        <Users text={text} />
      </Box>
    </div>
  );
};

export default Menu;
