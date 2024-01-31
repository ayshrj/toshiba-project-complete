const http = require("http");
const fs = require("fs");
const axios = require("axios");
const Papa = require("papaparse");
require("dotenv").config();

const port = process.env.PORT || 5000;

const csvFileUrl =
  "https://raw.githubusercontent.com/ayshrj/delete-asap/main/dataset.csv";

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
      Timestamp: timeUnit === "day" ? key : key.slice(0, -1),
      ProfitPercentage: currentProft,
    });
    delete groupedData[key].sum;
    delete groupedData[key].count;
  }

  console.log(result);
  return result;
}

const server = http.createServer((req, res) => {
  const urlParts = req.url.split("/");
  const timeUnit = urlParts[2];

  if (
    urlParts[1] === "json" &&
    ["day", "week", "month", "year"].includes(timeUnit)
  ) {
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

            const jsonString = JSON.stringify(downsampledData, null, 2);

            res.writeHead(200, {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            });

            res.end(jsonString);
          },
          error: (err) => {
            console.error("Error parsing CSV:", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching CSV file:", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server running`);
});
