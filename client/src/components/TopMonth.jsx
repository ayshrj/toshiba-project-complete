import React, { useState, useEffect } from "react";
import axios from "axios";

const TopMonth = ({ Title, boxHeightPercentage }) => {
  const [topMonthExtracted, setTopMonthExtracted] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTopMonthExtracted(null);
      try {
        const response = await axios.get(
          `https://toshiba-project-backend.onrender.com/profitData/month`
        );

        if (!response || !response.data) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = response.data.data;
        const extractedYear = parseInt(jsonData.Timestamp.split("-")[0]);
        const extractedMonth = parseInt(jsonData.Timestamp.split("-")[1]);
        setTopMonthExtracted({
          month: extractedMonth,
          year: extractedYear,
        });
      } catch (error) {
        setTopMonthExtracted(null);
        console.error("Fetch Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    let timer;

    if (topMonthExtracted === null) {
      timer = setInterval(() => {
        setLoadingTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      setLoadingTime(0);
    };
  }, [topMonthExtracted]);

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
      {topMonthExtracted === null ? (
        <>
          <p style={{ marginBottom: "2px" }}>Loading...</p>
          {loadingTime > 10 && (
            <p style={{ fontSize: "10px" }}>
              {
                "(This may take a moment, as my backend is hosted on the free version of render.com, It spin down after periods of inactivity)"
              }
            </p>
          )}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div style={{ fontSize: "30px", color: "#734A00" }}>
            {monthArray[topMonthExtracted.month]}
          </div>
          <div style={{ fontSize: "18px", color: "#FFA500" }}>
            {topMonthExtracted.year}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopMonth;
