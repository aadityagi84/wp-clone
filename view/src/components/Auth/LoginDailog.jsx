import { Box, Dialog, List, ListItem, styled, Typography } from "@mui/material";
import React from "react";
import { images } from "../../Constants/Data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../Context/AccountProvider";

const dailogStyle = {
  height: "96%",
  width: "60%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hidden",
  maxHeight: "100%",
  marginTop: "10%",
  display: "flex",
  paddingTop: "40px",
  alignItems: "center",
};

const Component = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  alignItems: "center",
  margin: "0 auto",
  paddingLeft: "15px",
});

const StyledList = styled(List)`
  margin-top: 20px;
  & > li {
    margin-top: 5px;
    padding-left: 0px;
    text-align: left;
  }
`;
const GoogleLoginBtn = styled(Box)`
display:"flex",
justifyContent:"center",
alignItems:"center",
`;

const LoginDailog = () => {
  const { setAccount } = useAuth();

  const onLoginSuccess = (res) => {
    console.log(res);
    const userData = jwtDecode(res.credential);
    console.log(userData);
    setAccount(userData);
  };
  const onLoginError = (res) => {
    console.log(res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dailogStyle }} hideBackdrop>
      <Component>
        <Box>
          <Typography>Log into WhatsApp Web</Typography>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap on Android, or on iPhone</ListItem>
            <ListItem>3. Tap Linked devices and then Link a device</ListItem>
            <ListItem>
              4. Point your phone at this screen to scan the QR code
            </ListItem>
          </StyledList>
        </Box>
        <Box className="text-center ">
          <img
            src={images.qrcode}
            className="w-[250px] mx-auto"
            alt="Qr Code "
          />
          <GoogleLoginBtn>
            <Box className=" mx-auto  w-[200px]">
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </GoogleLoginBtn>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDailog;
