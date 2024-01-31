import React, { useState, useEffect } from "react";
import "../assets/fonts/Fonts.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import WindowHeightCalculator from "./Utilities/WindowHeightCalculator";
import { PieChart, Pie, Cell } from "recharts";

const Goals = ({ Title, Percentage, BottomButton, boxHeightPercentage }) => {
  const data = [
    { value: Percentage, fill: "#FFCD71" },
    { value: 100 - Percentage, fill: "#FFF7E8" },
  ];

  return (
    <div
      className="goals"
      style={{
        display: "flex",
        flex: 1.5,
        flexDirection: "column",
        height: boxHeightPercentage,
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "30px",
        marginLeft: "9px",
        fontFamily: "Acumin-RPro",
        fontSize: "24px",
        alignItems: "center",
        marginBottom: "8px",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PieChart width={200} height={250}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            startAngle={180}
            endAngle={0}
            cornerRadius={20}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
        <div
          style={{ transform: "translateY(-170px)", fontSize: "40px" }}
        >{`${Percentage}%`}</div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          fontSize: "14px",
          color: "#734A00",
          transform: "translateY(-149px)",
        }}
      >
        <div style={{ cursor: "pointer" }}>{BottomButton}</div>{" "}
        <IconArrowNarrowRight style={{ height: "14px", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Goals;
