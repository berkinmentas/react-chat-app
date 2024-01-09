import React from "react";
import Cam from "../img/camera.png";
import Add from "../img/add-friend.png";
import More from "../img/more.png";
import Messages from "../components/Messages";
import Input from "../components/Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
};

export default Chat;
