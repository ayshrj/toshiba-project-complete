import React, { useState, useEffect } from "react";
import axios from "axios";

const TopYear = ({ Title, boxHeightPercentage }) => {
  const [topYearExtracted, setTopYearExtracted] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setTopYearExtracted(null);
      try {
        const response = await axios.get(
          `https://toshiba-project-backend.onrender.com/profitData/year`
        );

        if (!response || !response.data) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = response.data.data;
        const extractedYear = parseInt(jsonData.Timestamp[0]);
        setTopYearExtracted({
          year: extractedYear,
          profit: response.data.data.ProfitPercentage.toFixed(2),
        });
      } catch (error) {
        setTopYearExtracted(null);
        console.error("Fetch Error:", error.message);
      }
    };

    fetchData();
  }, []);

  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    let timer;

    if (topYearExtracted === null) {
      timer = setInterval(() => {
        setLoadingTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      setLoadingTime(0);
    };
  }, [topYearExtracted]);

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
      {topYearExtracted === null ? (
        <>
          <p>Loading...</p>
          {loadingTime > 10 && (
            <p style={{ fontSize: "14px" }}>
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
            {topYearExtracted.year}
          </div>
          <div style={{ fontSize: "12px", color: "#454545" }}>
            {`${topYearExtracted.profit}% profit was achieved`}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopYear;
