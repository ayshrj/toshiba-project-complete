import React, { useState } from "react";
import {
  IconSquareRoundedPlus,
  IconSquareRoundedPlusFilled,
} from "@tabler/icons-react";
import "../assets/fonts/Fonts.css";

const NewDeals = ({ title, newDeals, boxHeightPercentage }) => {
  const [deals, setDeals] = useState(newDeals);

  const handleAddDeal = (index) => {
    const updatedDeals = [...deals];
    updatedDeals[index].added = !updatedDeals[index].added;
    setDeals(updatedDeals);
  };

  return (
    <>
      <div
        className="new-deals"
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
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {deals.map((deal, index) => (
              <div
                className="singular-item"
                key={index}
                style={{
                  backgroundColor: "#FFF7E8",
                  color: "#734A00",
                  fontSize: "12px",
                  borderRadius: "16px",
                  padding: "12px",
                  margin: "4px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleAddDeal(index)}
                draggable="false"
              >
                {deal.added ? (
                  <IconSquareRoundedPlusFilled
                    style={{
                      marginRight: "4px",
                      color: "#FFA500",
                    }}
                  />
                ) : (
                  <IconSquareRoundedPlus
                    style={{
                      marginRight: "4px",
                      color: "#FFA500",
                    }}
                  />
                )}{" "}
                {deal.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDeals;
