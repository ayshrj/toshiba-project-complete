import React from "react";

const TopBuyer = ({ Title, topBuyer, boxHeightPercentage }) => {
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
        <div>
          <img src={topBuyer.profilePic} style={{ width: 30 }} />
        </div>
        <div style={{ fontSize: "10px", color: "#131313" }}>
          {topBuyer.name}
        </div>
        <div style={{ fontSize: "8px", color: "#454545" }}>
          {topBuyer.company}
        </div>
      </div>
    </div>
  );
};

export default TopBuyer;
