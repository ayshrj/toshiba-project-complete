import React from "react";

const TopYear = ({ Title, boxHeightPercentage }) => {
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
        padding: "30px",
        marginLeft: "12px",
        fontFamily: "Acumin-RPro",
        fontSize: "24px",
        width: 1,
        marginBottom: "8px",
      }}
    ></div>
  );
};

export default TopYear;
