import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const Component = styled(Box)`
    background: #fff;
    height: 50px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
\  `;
  const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    margin: 0 20px;
    position: relative;
    width: 100%;
    border-radius: 10px;
  `;
  const Icon = styled(Box)`
    position: absolute;
    coloe: #919191;
    padding: 6px 8px;
    height: 100%;
  `;
  const InputFiled = styled(InputBase)`
    width: 100%;
    height: 15px;
    padding: 16px;
    padding-left: 65px;
    fontsize: 14px;
  `;

  return (
    <Component>
      <Wrapper>
        <Icon>
          <IoSearch />
        </Icon>
        <Box>
          <InputFiled placeholder="Serach or a new Chat" />
        </Box>
      </Wrapper>
    </Component>
  );
};

export default Search;
