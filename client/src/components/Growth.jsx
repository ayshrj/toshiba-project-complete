import React, { useState, useEffect } from "react";
import Graph from "./Utilities/Graph";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import axios from "axios";

const Growth = ({ Title, boxHeightPercentage }) => {
  const storedDataset = localStorage.getItem("selectedDataset") || "month";
  const storedOption = localStorage.getItem("selectedOption") || "Month";

  const [data, setData] = useState("Month.csv");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(storedOption);
  const [hoveringOverDayOption, setHoveringOverDayOption] = useState(false);
  const [hoveringOverMonthOption, setHoveringOverMonthOption] = useState(false);
  const [hoveringOverYearOption, setHoveringOverYearOption] = useState(false);
  const [datasets, setDatasets] = useState({
    month: [],
    day: [],
    week: [],
    year: [],
  });

  const [selectedDataset, setSelectedDataset] = useState(storedDataset);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (datasets[selectedDataset].length === 0) {
          const response = await axios.get(
            `https://toshiba-project-backend.onrender.com/json/${selectedDataset}`
          );

          if (!response || !response.data) {
            throw new Error("Failed to fetch data.");
          }

          const jsonData = response.data.data;
          setDatasets((prevDatasets) => ({
            ...prevDatasets,
            [selectedDataset]: jsonData,
          }));
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Fetch Error:", error.message);
      }
    };

    fetchData();
  }, [selectedDataset, datasets]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    localStorage.setItem("selectedDataset", selectedDataset);
    localStorage.setItem("selectedOption", selectedOption);
  }, [selectedDataset, selectedOption]);

  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    let timer;

    if (loading) {
      timer = setInterval(() => {
        setLoadingTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      setLoadingTime(0);
    };
  }, [loading]);

  return (
    <div
      className="growth"
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: boxHeightPercentage,
        backgroundColor: "white",
        borderRadius: "16px",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "30px",
        marginLeft: "12px",
        marginBottom: "7px",
        fontFamily: "Acumin-RPro",
        position: "relative",
        width: 1,
        fontSize: "24px",
        minWidth: "400px",
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
        className="dropdown"
        style={{
          fontSize: 15,
          position: "absolute",
          top: "22px",
          right: "20px",
          zIndex: 1,
        }}
      >
        <div
          onClick={toggleDropdown}
          className="dropdown-button"
          style={{
            padding: 5,
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          {selectedOption}
          {isDropdownOpen ? (
            <IconChevronUp
              style={{ size: "15px", transform: "translateY(-5px)" }}
            />
          ) : (
            <IconChevronDown
              style={{ size: "15px", transform: "translateY(-5px)" }}
            />
          )}
        </div>
        {isDropdownOpen && (
          <div
            className="dropdown-content"
            style={{
              backgroundColor: "#FFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {selectedOption !== "Day" && (
              <p
                className={
                  hoveringOverDayOption
                    ? "timeperiod-sorting-option-active"
                    : ""
                }
                onClick={() => {
                  setSelectedDataset("day"),
                    setSelectedOption("Day"),
                    setDropdownOpen(false);
                  setHoveringOverDayOption(false);
                }}
                onMouseEnter={() => {
                  setHoveringOverDayOption(true);
                }}
                onMouseLeave={() => {
                  setHoveringOverDayOption(false);
                }}
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  borderRadius: 10,
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                Day
              </p>
            )}
            {/* {selectedOption !== "Week" && (
              <p
                className={
                  hoveringOverWeekOption
                    ? "timeperiod-sorting-option-active"
                    : ""
                }
                onClick={() => {
                  setSelectedDataset("downsampled_week"),
                    setSelectedOption("Week"),
                    setDropdownOpen(false);
                  setHoveringOverWeekOption(false);
                }}
                onMouseEnter={() => {
                  setHoveringOverWeekOption(true);
                }}
                onMouseLeave={() => {
                  setHoveringOverWeekOption(false);
                }}
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  borderRadius: 10,
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                Week
              </p>
            )} */}
            {selectedOption !== "Month" && (
              <p
                className={
                  hoveringOverMonthOption
                    ? "timeperiod-sorting-option-active"
                    : ""
                }
                onClick={() => {
                  setSelectedDataset("month"),
                    setSelectedOption("Month"),
                    setDropdownOpen(false);
                  setHoveringOverMonthOption(false);
                }}
                onMouseEnter={() => {
                  setHoveringOverMonthOption(true);
                }}
                onMouseLeave={() => {
                  setHoveringOverMonthOption(false);
                }}
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  borderRadius: 10,
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                Month
              </p>
            )}
            {selectedOption !== "Year" && (
              <p
                className={
                  hoveringOverYearOption
                    ? "timeperiod-sorting-option-active"
                    : ""
                }
                onClick={() => {
                  setSelectedDataset("year"),
                    setSelectedOption("Year"),
                    setDropdownOpen(false);
                  setHoveringOverYearOption(false);
                }}
                onMouseEnter={() => {
                  setHoveringOverYearOption(true);
                }}
                onMouseLeave={() => {
                  setHoveringOverYearOption(false);
                }}
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  borderRadius: 10,
                  padding: 5,
                  cursor: "pointer",
                }}
              >
                Year
              </p>
            )}
          </div>
        )}
      </div>
      {loading ? (
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
        <Graph dataset={datasets[selectedDataset]} />
      )}
    </div>
  );
};

export default Growth;
