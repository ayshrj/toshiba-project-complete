import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ dataset }) => {
  const tooltipStyle = {
    fontSize: "12px", // Adjust the tooltip font size as needed
  };

  const axisLabelStyle = {
    fontSize: "10px", // Adjust the axis label font size as needed
  };

  const formatProfitPercentage = (value) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div>
      <ResponsiveContainer
        width="100%"
        height={200}
        style={{ marginLeft: -50, marginTop: 10 }}
      >
        <AreaChart
          data={dataset}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#25CD25" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#25CD25" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="Timestamp" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            contentStyle={tooltipStyle}
            label="Profit %"
            formatter={formatProfitPercentage}
          />
          <Area
            type="monotone"
            dataKey="ProfitPercentage"
            stroke="#25CD25"
            fillOpacity={1}
            fill="url(#colorProfit)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
