import React from "react";
import { Box, Typography } from "@mui/material";
import { images } from "../../../Constants/Data";

const EmptyChat = () => {
  return (
    <div className="w-full h-full">
      <Box className="w-full h-full flex items-center flex-col justify-center ">
        <Box>
          <img src={images.emptyChat} className="w-[60%] mx-auto" />
        </Box>
        <Box className="flex flex-col items-center justify-center text-center mt-4">
          <Typography class="lg:text-[30px] md:text-[25px] text-[20px] font-bold mt-2">
            Download WhatsApp for Windows
          </Typography>
          <Typography class="lg:text-[20px]  text-[17px] font-light mt-2">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default EmptyChat;
