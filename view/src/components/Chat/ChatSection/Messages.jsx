import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { images } from "../../../Constants/Data";
import ChatFooter from "./ChatFooter";
import { useAuth } from "../../../Context/AccountProvider";
import {
  getMessages as fetchMessagesFromAPI,
  newMessage,
} from "../../../services/api";
import { useEffect } from "react";
import ShowMessageData from "./showMessageData";

const Wrapper = styled(Box)`
  // background-image: url(${images.backgroundImage});
  background-color: #f0f2f5;
  background-size: 40%;
  background-repeat: no-repeat;
`;
const Component = styled(Box)`
  height: 78.2vh;
  overflow-y: scroll;
  padding: 20px 0px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messeage, setMessage] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState([]);
  const { account } = useAuth();
  useEffect(() => {
    const fetchMessages = async () => {
      if (conversation?._id) {
        const response = await fetchMessagesFromAPI(conversation._id);
        setMessage(response);
        console.log(response, "get messages data");
      }
    };
    fetchMessages();
  }, [person._id, conversation._id, newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13 && value.trim()) {
      const message = {
        senderId: account?.sub,
        receiverId: person?.sub,
        conversationId: conversation?._id,
        type: "text",
        text: value,
      };
      console.log("message", message);
      await newMessage(message); // Assuming newMessage is a function that handles sending the message

      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {/* Chat messages can be rendered here */}

        {messeage &&
          messeage.map((data, index) => (
            <div className="mb-1 mx-10" key={index}>
              <ShowMessageData data={data} />
            </div>
          ))}
      </Component>
      <div className="">
        <ChatFooter
          sendText={sendText}
          setMessage={setValue}
          value={value}
          file={file}
          setFile={setFile}
          conversation={conversation}
        />
      </div>
    </Wrapper>
  );
};

export default Messages;
