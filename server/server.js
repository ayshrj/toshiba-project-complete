const express = require("express");
const axios = require("axios");
const Papa = require("papaparse");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const csvFileUrl =
  "https://raw.githubusercontent.com/ayshrj/delete-asap/main/dataset.csv";

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

  console.log(result);
  return result;
}

app.get("/json/:timeUnit", (req, res) => {
  const timeUnit = req.params.timeUnit;

  if (["day", "week", "month", "year"].includes(timeUnit)) {
    axios
      .get(csvFileUrl)
      .then((response) => {
        const csvData = response.data;

        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            const jsonData = result.data;
            let downsampledData;

            switch (timeUnit) {
              case "day":
                downsampledData = downsampleData(jsonData, "day");
                break;
              case "week":
                downsampledData = downsampleData(jsonData, "week");
                break;
              case "month":
                downsampledData = downsampleData(jsonData, "month");
                break;
              case "year":
                downsampledData = downsampleData(jsonData, "year");
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
  } else {
    res.status(404).send("Not Found");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
