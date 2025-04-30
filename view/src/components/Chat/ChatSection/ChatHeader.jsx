import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useAuth } from "../../../Context/AccountProvider";

import { MdMoreVert } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { images } from "../../../Constants/Data";

const Component = styled(Box)`
  height: 70px;
  background: #ededed;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 2px solid red;
`;
const ImgSec = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const IconSec = styled(Box)`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Status = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
`;
const Name = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`;

const ChatHeader = ({ person }) => {
  return (
    <Component>
      <ImgSec>
        <img
          src={person.picture || images.defaultImg}
          className="w-[60px] border-2 h-[60px] rounded-full"
          alt="logo_img"
        />
        <Box>
          <Name className="text-[20px] font-semibold">{person.name}</Name>
          <Status className="text-[12px] font-semibold">Offline</Status>
        </Box>
      </ImgSec>
      <IconSec>
        <IoSearch className="text-[22px]" />
        <MdMoreVert className="text-[22px]" />
      </IconSec>
    </Component>
  );
};

export default ChatHeader;
