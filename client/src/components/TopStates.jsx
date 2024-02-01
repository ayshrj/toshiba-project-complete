import React, { useState } from "react";

import "../assets/fonts/Fonts.css";

const TopStates = ({ title, topStates, boxHeightPercentage }) => {
  const getMaxProfit = (states) => {
    if (!states || states.length === 0) {
      return null;
    }

    let maxProfit = -Infinity;

    for (const state of states) {
      const profit = parseInt(state.profit, 10);

      if (!isNaN(profit)) {
        maxProfit = Math.max(maxProfit, profit);
      }
    }

    return maxProfit;
  };

  const maxProfit = getMaxProfit(topStates);

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
          position: "relative",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontFamily: "Acumin-BdPro",
            paddingBottom: "5px",
          }}
        >
          {title}
        </div>
        {topStates.map((state, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              marginLeft: "-12px",
            }}
          >
            <div
              style={{
                width: `calc(100%*${state.profit / maxProfit})`,
                height: "80%",
                margin: "3%",
                borderRadius: "4px",
                background:
                  "linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0) 100%)",
                zIndex: 1,
                paddingLeft: "2px",
              }}
            >
              <div
                style={{
                  transform: "translate(1px, 5px)",
                }}
              >
                {state.stateInitial}
              </div>
            </div>

            <div
              style={{
                zIndex: 2,
                transform: `translate(-70px, 1px)`,
              }}
            >
              {`${state.profit / 1000}K`}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopStates;
