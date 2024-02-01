const express = require("express");
const axios = require("axios");
const Papa = require("papaparse");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const csvFileUrl =
  "https://raw.githubusercontent.com/ayshrj/toshiba-project-complete/main/client/src/assets/dataset/dataset.csv";

app.use(cors());

function downsampleData(data, timeUnit) {
  const groupedData = {};

  data.forEach((entry) => {
    const timestamp = new Date(entry.Timestamp);
    if (isNaN(timestamp) || !entry.Timestamp) {
      console.error("Invalid timestamp:", entry.Timestamp);
      return;
    }

    let key;
    const currentDate = entry.Timestamp.split(" ")[0].split("-");

    switch (timeUnit) {
      case "day":
        key = currentDate[0] + "-" + currentDate[1] + "-" + currentDate[2];
        break;
      case "month":
        key = currentDate[0] + "-" + currentDate[1] + "-";
        break;
      case "week":
        break;
      case "year":
        key = currentDate[0];
        break;
      default:
        throw new Error("Invalid time unit");
    }

    if (!groupedData[key]) {
      groupedData[key] = { sum: 0, count: 0 };
    }

    groupedData[key].sum += parseFloat(entry.ProfitPercentage);
    groupedData[key].count += 1;
  });

  const result = [];
  for (const key in groupedData) {
    const currentProft = groupedData[key].sum / groupedData[key].count;
    result.push({
      Timestamp:
        timeUnit === "day" || timeUnit === "year" ? key : key.slice(0, -1),
      ProfitPercentage: currentProft,
    });
    delete groupedData[key].sum;
    delete groupedData[key].count;
  }

  return result;
}

function getMaxProfitInfo(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  let maxProfitPercentage = Number.NEGATIVE_INFINITY;
  let maxProfitTimestamp = null;

  data.forEach((item) => {
    if (item.ProfitPercentage >= maxProfitPercentage) {
      maxProfitPercentage = item.ProfitPercentage;
      maxProfitTimestamp = item.Timestamp;
    }
  });

  return {
    Timestamp: maxProfitTimestamp,
    ProfitPercentage: maxProfitPercentage,
  };
}

let downsampledDataForDay = [];
let downsampledDataForWeek = [];
let downsampledDataForMonth = [];
let downsampledDataForYear = [];

app.get("/json/:timeUnit", (req, res) => {
  const timeUnit = req.params.timeUnit;

  let downsampledData;

  switch (timeUnit) {
    case "day":
      downsampledData = downsampledDataForDay;
      break;
    case "week":
      downsampledData = downsampledDataForWeek;
      break;
    case "month":
      downsampledData = downsampledDataForMonth;
      break;
    case "year":
      downsampledData = downsampledDataForYear;
      break;
  }

  if (downsampledData && downsampledData.length !== 0) {
    res.status(200).json({
      data: downsampledData,
    });
  } else {
    axios
      .get(csvFileUrl)
      .then((response) => {
        const csvData = response.data;

        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            const jsonData = result.data;

            switch (timeUnit) {
              case "day":
                downsampledData = downsampleData(jsonData, "day");
                downsampledDataForDay = downsampledData;
                break;
              case "week":
                downsampledData = downsampleData(jsonData, "week");
                downsampledDataForWeek = downsampledData;
                break;
              case "month":
                downsampledData = downsampleData(jsonData, "month");
                downsampledDataForMonth = downsampledData;
                break;
              case "year":
                downsampledData = downsampleData(jsonData, "year");
                downsampledDataForYear = downsampledData;
                break;
            }

            res.status(200).json({
              data: downsampledData,
            });
          },
          error: (err) => {
            console.error("Error parsing CSV:", err);
            res.status(500).send("Internal Server Error");
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV file:", error);
        res.status(500).send("Internal Server Error");
      });
  }
});

app.get("/profitData/:timeUnit", (req, res) => {
  const timeUnit = req.params.timeUnit;

  let downsampledData;

  switch (timeUnit) {
    case "day":
      downsampledData = downsampledDataForDay;
      break;
    case "week":
      downsampledData = downsampledDataForWeek;
      break;
    case "month":
      downsampledData = downsampledDataForMonth;
      break;
    case "year":
      downsampledData = downsampledDataForYear;
      break;
  }

  if (downsampledData && downsampledData.length !== 0) {
    const maxProfit = getMaxProfitInfo(downsampledData);
    res.status(200).json({
      data: maxProfit,
    });
  } else {
    axios
      .get(csvFileUrl)
      .then((response) => {
        const csvData = response.data;

        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            const jsonData = result.data;

            switch (timeUnit) {
              case "day":
                downsampledData = downsampleData(jsonData, "day");
                downsampledDataForDay = downsampledData;
                break;
              case "week":
                downsampledData = downsampleData(jsonData, "week");
                downsampledDataForWeek = downsampledData;
                break;
              case "month":
                downsampledData = downsampleData(jsonData, "month");
                downsampledDataForMonth = downsampledData;
                break;
              case "year":
                downsampledData = downsampleData(jsonData, "year");
                downsampledDataForYear = downsampledData;
                break;
            }

            const maxProfit = getMaxProfitInfo(downsampledData);
            res.status(200).json({
              data: maxProfit,
            });
          },
          error: (err) => {
            console.error("Error parsing CSV:", err);
            res.status(500).send("Internal Server Error");
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV file:", error);
        res.status(500).send("Internal Server Error");
      });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
