import React, { useState } from "react";
import { useAuth } from "../../../Context/AccountProvider";
import { Box, styled } from "@mui/material";
import { MdOutlineChat } from "react-icons/md";
// import { IoMdMore } from "react-icons/io";
import Search from "./Search";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Drawer/InfoDrawer";

const Header = () => {
  const { account } = useAuth();
  const Component = styled(Box)`
    height: "50px";
    background: #ededed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  `;
  const Icons = styled(Box)`
    display: flex;
    gap: 20px;
  `;

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <div>
      <Component>
        <img
          src={account.picture}
          referrerPolicy="no-referrer"
          className="w-[50px] h-[50px] rounded-full cursor-pointer "
          alt="dp"
          onClick={() => toggleDrawer()}
        />
        <Icons>
          <MdOutlineChat className="text-[25px]" />
          <HeaderMenu />
        </Icons>
      </Component>

      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
};

export default Header;
