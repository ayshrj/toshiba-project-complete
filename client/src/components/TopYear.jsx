import React from "react";

const TopYear = ({ Title, topYear, boxHeightPercentage }) => {
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
        <div style={{ fontSize: "30px", color: "#734A00" }}>{topYear.year}</div>
        <div style={{ fontSize: "12px", color: "#454545" }}>
          {"96k sold so far"}
        </div>
      </div>
    </div>
  );
};

export default TopYear;
