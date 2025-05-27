import { Box, InputBase } from "@mui/material";
import React, { useEffect } from "react";
import { IoAttachSharp } from "react-icons/io5";
import { MdMic, MdOutlineEmojiEmotions } from "react-icons/md";
import { uploadFiles } from "../../../services/api";
import { useAuth } from "../../../Context/AccountProvider";

const ChatFooter = ({
  sendText,
  setMessage,
  value,
  file,
  setFile,
  conversation,
}) => {
  const { account } = useAuth();
  // const senderId = account.sub;
  const chatId = conversation._id;

  console.log(chatId, "accound from caht");

  useEffect(() => {
    const handleFileUpload = async () => {
      if (file) {
        const data = new FormData();
        data.append("file", file);
        // data.append("senderId", senderId);
        data.append("chatId", chatId);

        console.log(file, "file data");
        // console.log(senderId, chatId, "IDs sent with file");

        await uploadFiles(data);
      }
    };
    handleFileUpload();
  }, [file]);

  const onfileChnage = (e) => {
    setFile(e.target.files[0]);
    setMessage(e.target.files[0].name);
  };
  return (
    <Box className="flex items-center justify-between bg-[#ededed] p-[10px] h-[60px] gap-4">
      <Box className="flex items-center gap-[10px]">
        <MdOutlineEmojiEmotions className="text-[22px] cursor-pointer font-semibold" />
        <label htmlFor="fileInput">
          <IoAttachSharp className="text-[22px] cursor-pointer font-semibold" />
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => onfileChnage(e)}
        />
      </Box>
      <Box className="flex items-center justify-between bg-[#fff]  p-[5px] w-full h-[40px]">
        <InputBase
          placeholder="Type a message"
          value={value}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => sendText(e)}
        />

        <MdMic className="text-[22px] cursor-pointer" />
      </Box>
    </Box>
  );
};

export default ChatFooter;
