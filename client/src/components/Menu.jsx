import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/left-panel-icons/logo.svg";
import OrangeFarm from "../assets/left-panel-icons/orange-farm.png";
import ProfileIcon from "../assets/left-panel-icons/profile-icon.png";
import "../assets/fonts/Fonts.css";
import {
  IconSearch,
  IconLayoutCollage,
  IconUsers,
  IconClipboardData,
  IconWorld,
  IconMessageCircle2,
  IconBasketCheck,
  IconDatabaseExport,
  IconLogout,
  IconSettings2,
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
  IconChevronUp,
  IconUserPlus,
  IconShoppingCart,
  IconHistory,
} from "@tabler/icons-react";
import WindowHeightCalculator from "./Utilities/WindowHeightCalculator";
import "./Menu.css";

const Menu = ({ menuIsCollapsed, setMenuIsCollapsed }) => {
  const { windowHeight } = WindowHeightCalculator();
  const [isCustomersButtonOpen, setIsCustomersButtonOpen] = useState(false);

  return (
    <div
      className="left-side-container"
      style={{
        display: "flex",
        flex: !menuIsCollapsed ? 0.16 : 0.01,
        flexDirection: "column",
        height: windowHeight - 60,
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "16px",
        fontFamily: "Acumin-BdPro",
        fontSize: "24px",
        marginRight: 5,
        minWidth: menuIsCollapsed ? "" : "200px",
      }}
    >
      <div
        className="left-side-upperlogos"
        style={{
          padding: 6,
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Logo} style={{ height: "28px", margin: 3 }} alt="Logo" />
        <img
          src={OrangeFarm}
          style={{
            height: "28px",
            padding: 3,
            display: !menuIsCollapsed ? "" : "none",
          }}
          alt="Orange Farm"
        />
      </div>
      <div className="left-side-search">
        <div style={{ position: "relative", marginBottom: 20 }}>
          <IconSearch
            size={20}
            style={{
              position: "absolute",
              top: "21px",
              left: "10px",
              height: menuIsCollapsed ? "41px" : "",
              transform: "translateY(-50%)",
              color: "#757575",
            }}
          />
          {!menuIsCollapsed && (
            <input
              style={{
                width: "calc(100% - 80px)",
                height: "50%",
                borderRadius: "50px",
                padding: "12px 40px 12px 40px",
                border: "1px solid #F1F1F1",
              }}
              id="search-button"
              placeholder={`Search`}
            />
          )}
        </div>
      </div>
      <div
        className="left-side-buttons"
        style={{ fontFamily: "Acumin-RPro", fontSize: 14 }}
      >
        <div className="left-side-button">
          <IconLayoutCollage
            className="left-side-button-icon"
            style={{
              color: "#FFA500",
              paddingTop: menuIsCollapsed ? "41px" : "",
            }}
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">Dashboard</div>
          )}
        </div>
        <div
          className="left-side-button"
          onClick={() => {
            if (!menuIsCollapsed)
              setIsCustomersButtonOpen(!isCustomersButtonOpen);
          }}
        >
          <IconUsers
            className="left-side-button-icon"
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">Customers</div>
          )}
          {isCustomersButtonOpen ? (
            <IconChevronUp
              className="left-side-button-icon"
              style={{ marginLeft: "auto" }}
            />
          ) : (
            <IconChevronDown
              className="left-side-button-icon"
              style={{ marginLeft: "auto" }}
            />
          )}
        </div>
        {isCustomersButtonOpen && (
          <>
            <div className="left-side-button submenu">
              <IconUserPlus
                className="left-side-button-icon"
                onClick={() => {
                  setMenuIsCollapsed(false);
                }}
              />
              {!menuIsCollapsed && (
                <div className="left-side-button-label">Add New Customer</div>
              )}
            </div>{" "}
            <div className="left-side-button submenu">
              <IconShoppingCart
                className="left-side-button-icon"
                onClick={() => {
                  setMenuIsCollapsed(false);
                }}
              />
              {!menuIsCollapsed && (
                <div className="left-side-button-label">Customer Orders</div>
              )}
            </div>
            <div className="left-side-button submenu">
              <IconHistory
                className="left-side-button-icon"
                onClick={() => {
                  setMenuIsCollapsed(false);
                }}
              />
              {!menuIsCollapsed && (
                <div className="left-side-button-label">Customer History</div>
              )}
            </div>
          </>
        )}
        <div className="left-side-button">
          <IconClipboardData
            className="left-side-button-icon"
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">All reports</div>
          )}
        </div>
        <div className="left-side-button">
          <IconWorld
            className="left-side-button-icon"
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">Geography</div>
          )}
        </div>
        <div className="left-side-button">
          <IconMessageCircle2
            className="left-side-button-icon"
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">Conversations</div>
          )}
        </div>
        <div className="left-side-button">
          <IconBasketCheck
            className="left-side-button-icon"
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">Deals</div>
          )}
        </div>
        <div className="left-side-button">
          <IconDatabaseExport
            className="left-side-button-icon"
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">Export</div>
          )}
        </div>
      </div>

      <div
        className="left-side-buttons"
        style={{ marginTop: "auto", fontFamily: "Acumin-RPro", fontSize: 14 }}
      >
        <div
          className="left-side-collapse-arrow"
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="collapse-menu"
            style={{
              alignSelf: "flex-end",
              transform: "translateX(25px)",
              borderRadius: "8px",
              padding: 0,
              backgroundColor: "#F6F6F3",
              cursor: "pointer",
            }}
            onClick={() => {
              if (menuIsCollapsed === true) setIsCustomersButtonOpen(false);
              setMenuIsCollapsed(!menuIsCollapsed);
            }}
          >
            {menuIsCollapsed ? (
              <IconChevronRight style={{ transform: "translateY(3px)" }} />
            ) : (
              <IconChevronLeft style={{ transform: "translateY(3px)" }} />
            )}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <img
              src={ProfileIcon}
              style={{ width: "32px", paddingLeft: "10px" }}
            />
          </div>
          {!menuIsCollapsed && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 10,
              }}
            >
              <div style={{ fontFamily: "Acumin-RPro", paddingBottom: 2 }}>
                <strong>Gustavo Xavier</strong>
              </div>
              <div
                style={{
                  backgroundColor: "#FFCD71",
                  padding: "2px 5px",
                  width: "fit-content",
                  borderRadius: 60,
                  fontSize: 10,
                }}
              >
                Admin
              </div>
            </div>
          )}
        </div>
        <div className="left-side-button">
          <IconSettings2
            className="left-side-button-icon"
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div className="left-side-button-label">Settings</div>
          )}
        </div>
        <div className="left-side-button" style={{ paddingBottom: "30px" }}>
          <IconLogout
            className="left-side-button-icon"
            style={{ color: "#B01212" }}
            onClick={() => {
              setMenuIsCollapsed(false);
            }}
          />
          {!menuIsCollapsed && (
            <div
              className="left-side-button-label"
              style={{ color: "#B01212" }}
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
