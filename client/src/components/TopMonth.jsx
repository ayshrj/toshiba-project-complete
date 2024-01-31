import React from "react";

const TopMonth = ({ Title, boxHeightPercentage }) => {
  return (
    <div
      className="customers"
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: boxHeightPercentage,
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "20px",
        marginLeft: "12px",
        fontFamily: "Acumin-RPro",
        fontSize: "24px",
        width: 1,
        marginBottom: "8px",
      }}
    >
      <div style={{ fontSize: "15px", color: "#7D7D7D" }}>{Title}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "auto",
        }}
      >
        <div style={{ fontSize: "20px", color: "#734A00" }}>{"Novemeber"}</div>
        <div style={{ fontSize: "18px", color: "#FFA500" }}>{"2019"}</div>
      </div>
    </div>
  );
};

export default TopMonth;
