import { Box, InputBase } from "@mui/material";
import React from "react";
import { IoAttachSharp } from "react-icons/io5";
import { MdMic, MdOutlineEmojiEmotions } from "react-icons/md";

const ChatFooter = ({ sendText }) => {
  const [message, setMessage] = React.useState("");
  return (
    <Box className="flex items-center justify-between bg-[#ededed] p-[10px] h-[55px] gap-4">
      <Box className="flex items-center gap-[10px]">
        <MdOutlineEmojiEmotions className="text-[22px] cursor-pointer font-semibold" />
        <IoAttachSharp className="text-[22px] cursor-pointer font-semibold" />
      </Box>
      <Box className="flex items-center justify-between bg-[#fff]  p-[5px] w-full h-[40px]">
        <InputBase
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => sendText(e, message)}
        />
        <MdMic className="text-[22px] cursor-pointer" />
      </Box>
    </Box>
  );
};

export default ChatFooter;
