import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { formatDate } from "../../../utils/Common-utils";
import { useAuth } from "../../../Context/AccountProvider";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;
const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const ShowMessageData = ({ data }) => {
  const { person } = useAuth();
  return (
    <>
      {person.sub === data.receiverId ? (
        <Own>
          <Typography className="text-[14px] pl-[25px] pr-[10px]">
            {data.text}
          </Typography>
          <Typography className="!text-[10px] text-[#919191] pt-[10px]">
            {formatDate(data.createdAt)}
          </Typography>
        </Own>
      ) : (
        <Wrapper>
          <Typography className="text-[14px] pl-[25px] pr-[10px] ">
            {data.text}
          </Typography>
          <Typography className="!text-[10px] text-[#919191] pt-[10px]">
            {formatDate(data.createdAt)}
          </Typography>
        </Wrapper>
      )}
    </>
  );
};

export default ShowMessageData;
