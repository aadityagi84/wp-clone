import { Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../Context/AccountProvider";

const Profile = () => {
  const { account } = useAuth();
  return (
    <>
      <Box className="py-4 flex items-center  justify-center ">
        <img
          src={account.picture}
          alt="profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
      </Box>
      <Box className="bg-white  px-6 py-8 shadow-lg ">
        <Typography className="text-[#008069]">Your Name </Typography>
        <Box className="mt-6">
          <Typography>{account.name} </Typography>
        </Box>
      </Box>
      <Box></Box>
      <Box></Box>
    </>
  );
};

export default Profile;
