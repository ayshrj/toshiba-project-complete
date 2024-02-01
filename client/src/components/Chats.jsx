import React, { useState } from "react";
import "../assets/fonts/Fonts.css";

const Chats = ({ title, messages, boxHeightPercentage }) => {
  const noOfUnreadMessages = messages.filter(
    (message) => message.read === false
  ).length;
  return (
    <>
      <div
        className="customers"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: boxHeightPercentage,
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "30px",
          marginLeft: "12px",
          fontFamily: "Acumin-RPro",
          fontSize: "24px",
          width: 1,
          marginBottom: "8px",
        }}
      >
        <div style={{ fontSize: 20, fontFamily: "Acumin-BdPro" }}>{title}</div>
        <div style={{ fontSize: 14, color: "#454545" }}>
          {noOfUnreadMessages
            ? `${noOfUnreadMessages} unread message${
                noOfUnreadMessages === 1 ? "" : "s"
              }`
            : "No unread message"}
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: !message.read ? "#FFF7E8" : "",
                  borderRadius: "16px",
                  padding: "12px",
                  marginRight: "8px",
                }}
              >
                <img
                  src={message.profilePic}
                  style={{ height: 30 }}
                  alt={`Profile Pic ${index}`}
                />
              </div>
              {!message.read && (
                <div
                  style={{
                    backgroundColor: "#EB5050",
                    height: 5,
                    width: 5,
                    borderRadius: "50%",
                    border: "2px solid white",
                    transform: "translate(-25px, 15px)",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chats;
