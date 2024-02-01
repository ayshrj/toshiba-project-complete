import React, { useState, useEffect } from "react";
import "../assets/fonts/Fonts.css";
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import "./InformationBox.css";

const InformationBox = ({
  Title,
  Percentage,
  Profit,
  Subtext,
  BottomButton,
  boxHeightPercentage,
}) => {
  return (
    <div
      className="information-box"
      style={{
        display: "flex",
        flex: 2,
        flexDirection: "column",
        height: boxHeightPercentage,
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "30px",
        marginLeft: "12px",
        marginBottom: "8px",
        fontFamily: "Acumin-RPro",
        fontSize: "24px",
      }}
    >
      <div
        style={{
          fontFamily: "Acumin-BdPro",
          padding: "0px, 0px, 16px, 0px",
          fontSize: "20px",
        }}
      >
        {Title}
      </div>
      <div
        style={{
          fontSize: "48px",
          marginTop: "5px",
        }}
      >
        {`${Percentage}%`}{" "}
        {Profit === 1 ? (
          <IconArrowUpRight
            className="rotate-on-hover"
            style={{ color: "#25CD25" }}
          />
        ) : Profit === -1 ? (
          <IconArrowDownRight
            className="rotate-on-hover"
            style={{ color: "#FF0000" }}
          />
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "#454545",
        }}
      >
        {Subtext}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          fontSize: "14px",
          color: "#734A00",
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
        >
          {BottomButton}
        </div>{" "}
        <IconArrowNarrowRight style={{ height: "14px", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default InformationBox;
