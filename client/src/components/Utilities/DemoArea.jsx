import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/plots";
import Papa from "papaparse";

const DemoArea = () => {
  const [datasets, setDatasets] = useState({
    downsampled_day: [],
    downsampled_week: [],
    downsampled_month: [],
    downsampled_year: [],
  });

  const [selectedDataset, setSelectedDataset] = useState("downsampled_day");

  const fetchData = async (dataset) => {
    const response = await fetch(`../src/assets/dataset/${dataset}.csv`);
    const csvData = await response.text();
    console.log(dataset, csvData);

    Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setDatasets((prevDatasets) => ({
          ...prevDatasets,
          [dataset]: result.data,
        }));
      },
    });
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await Promise.all([
        fetchData("downsampled_day"),
        fetchData("downsampled_week"),
        fetchData("downsampled_month"),
        fetchData("downsampled_year"),
      ]);
    };

    fetchAllData();
  }, []);

  const handleDatasetChange = (newDataset) => {
    setSelectedDataset(newDataset);
  };

  const config = {
    data: datasets[selectedDataset],
    xField: "Timestamp",
    yField: "ProfitPercentage",
    // style: {
    //   fill: "linear-gradient(-90deg, white 0%, darkgreen 100%)",
    // },
    axis: {
      ProfitPercentage: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "darkgreen",
        strokeWidth: 2,
      },
    },
  };

  return (
    <div>
      <div>
        <label>Select Dataset:</label>
        <select
          onChange={(e) => handleDatasetChange(e.target.value)}
          value={selectedDataset}
        >
          <option value="downsampled_day">Day</option>
          <option value="downsampled_week">Week</option>
          <option value="downsampled_month">Month</option>
          <option value="downsampled_year">Year</option>
        </select>
      </div>
      <Area {...config} />
    </div>
  );
};

export default DemoArea;
