import React, { useState } from "react";
import "../assets/fonts/Fonts.css";
import {
  IconChevronDown,
  IconChevronUp,
  IconDotsVertical,
  IconPencil,
  IconStar,
  IconMessageCircle2,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import "./Customer.css";

const Customers = ({
  title,
  customerData,
  BottomButton,
  boxHeightPercentage,
}) => {
  const [data, setData] = useState(customerData);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By Newest");
  const [hoveringOverNewestOption, setHoveringOverNewestOption] =
    useState(false);
  const [hoveringOverOldestOption, setHoveringOverOldestOption] =
    useState(false);
  const [
    hoveringOverAplhabeticallyOption,
    setHoveringOverAplhabeticallyOption,
  ] = useState(false);

  function sortByDateCreated(data, descending = true) {
    return data.sort((a, b) => {
      const dateA = new Date(a.dateCreated);
      const dateB = new Date(b.dateCreated);
      return descending ? dateB - dateA : dateA - dateB;
    });
  }

  function sortByName(data) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(1);
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
          minWidth: "400px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "20px", fontFamily: "Acumin-BdPro" }}>
            {title}
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
              <strong>{selectedOption}</strong>
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
                  color: "#454545",
                }}
              >
                {selectedOption !== "Sort By Newest" && (
                  <p
                    className={
                      hoveringOverNewestOption
                        ? "customers-sorting-option-active"
                        : ""
                    }
                    onClick={() => {
                      setData(sortByDateCreated(data, false)),
                        setSelectedOption("Sort By Newest"),
                        setDropdownOpen(false);
                      setHoveringOverNewestOption(false);
                    }}
                    onMouseEnter={() => {
                      setHoveringOverNewestOption(true);
                    }}
                    onMouseLeave={() => {
                      setHoveringOverNewestOption(false);
                    }}
                    style={{
                      marginTop: 5,
                      marginBottom: 5,
                      borderRadius: 10,
                      padding: 5,
                      cursor: "pointer",
                    }}
                  >
                    Sort By <strong>Newest</strong>
                  </p>
                )}
                {selectedOption !== "Sort By Oldest" && (
                  <p
                    className={
                      hoveringOverOldestOption
                        ? "customers-sorting-option-active"
                        : ""
                    }
                    onClick={() => {
                      setData(sortByDateCreated(data, true)),
                        setSelectedOption("Sort By Oldest"),
                        setDropdownOpen(false);
                      setHoveringOverOldestOption(false);
                    }}
                    onMouseEnter={() => {
                      setHoveringOverOldestOption(true);
                    }}
                    onMouseLeave={() => {
                      setHoveringOverOldestOption(false);
                    }}
                    style={{
                      marginTop: 5,
                      marginBottom: 5,
                      borderRadius: 10,
                      padding: 5,
                      cursor: "pointer",
                    }}
                  >
                    Sort By <strong>Oldest</strong>
                  </p>
                )}
                {selectedOption !== "Sort Alphabetically" && (
                  <p
                    className={
                      hoveringOverAplhabeticallyOption
                        ? "customers-sorting-option-active"
                        : ""
                    }
                    onClick={() => {
                      setData(sortByName(data)),
                        setSelectedOption("Sort Alphabetically"),
                        setDropdownOpen(false);
                      setHoveringOverAplhabeticallyOption(false);
                    }}
                    onMouseEnter={() => {
                      setHoveringOverAplhabeticallyOption(true);
                    }}
                    onMouseLeave={() => {
                      setHoveringOverAplhabeticallyOption(false);
                    }}
                    style={{
                      marginTop: 5,
                      marginBottom: 5,
                      borderRadius: 10,
                      padding: 5,
                      cursor: "pointer",
                    }}
                  >
                    Sort <strong>Alphabetically</strong>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <div
          className="customer-selectable"
          style={{ position: "relative", paddingTop: 20, cursor: "pointer" }}
        >
          {customerData.map((customer, index) => (
            <div
              key={index}
              className="single-customer"
              style={{
                display: "flex",
                backgroundColor:
                  selectedCustomerIndex === index ? "#FFF7E8" : "#FFF",
                padding: "16px",
                borderRadius: "16px",
                marginBottom: "8px",
                position: "relative",
              }}
              onClick={() => setSelectedCustomerIndex(index)}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={customer.profilePic}
                  style={{ height: 30 }}
                  alt={`${customer.name} Profile`}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 10,
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "13px" }}>{customer.name}</div>
                <div style={{ fontSize: "11px" }}>{customer.company}</div>
              </div>

              {selectedCustomerIndex === index && (
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-40%)",
                    color: "#734A00",
                  }}
                >
                  <IconMessageCircle2
                    style={{ size: "15px", marginLeft: 30, cursor: "pointer" }}
                  />
                  <IconStar
                    style={{ size: "15px", marginLeft: 30, cursor: "pointer" }}
                  />
                  <IconPencil
                    style={{ size: "15px", marginLeft: 30, cursor: "pointer" }}
                  />
                  <div
                    style={{
                      fontSize: "30px",
                      marginLeft: 30,
                      transform: "translateY(-6px)",
                    }}
                  >
                    {"|"}
                  </div>
                  <IconDotsVertical
                    style={{
                      size: "15px",
                      marginLeft: 30,
                      marginRight: 30,
                      cursor: "pointer",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: "14px",
            marginLeft: "10px",
            color: "#734A00",
          }}
        >
          <div style={{ cursor: "pointer", marginRight: "10px" }}>
            {BottomButton}
          </div>{" "}
          <IconArrowNarrowRight style={{ height: "14px", cursor: "pointer" }} />
        </div>
      </div>
    </>
  );
};

export default Customers;
