import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import InformationBox from "./components/InformationBox";
import Goals from "./components/Goals";
import Customers from "./components/Customers";

import Chats from "./components/Chats";
import TopStates from "./components/TopStates";
import NewDeals from "./components/NewDeals";
import Growth from "./components/Growth";
import WindowHeightCalculator from "./components/Utilities/WindowHeightCalculator";
import TopMonth from "./components/TopMonth";
import TopYear from "./components/TopYear";
import TopBuyer from "./components/TopBuyer";
import {
  customerData,
  messages,
  topStates,
  newDeals,
  topBuyer,
} from "./components/Utilities/DashboardInfo";

const firstRowHeightPercentage = 0.18;
const secondRowHeightPercentage = 0.4;
const thirdRowHeightPercentage = 0.182;

const App = () => {
  const [menuIsCollapsed, setMenuIsCollapsed] = useState(false);
  const { windowHeight } = WindowHeightCalculator();
  return (
    <div
      className="app-container"
      style={{
        display: "flex",
        borderRadius: "32px",
        padding: "16px",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <Menu
        menuIsCollapsed={menuIsCollapsed}
        setMenuIsCollapsed={setMenuIsCollapsed}
      />
      <div
        className="dashboard-container"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: menuIsCollapsed ? 0.99 : 0.84,
        }}
      >
        <div
          className="firstRow"
          style={{
            display: "flex",
            borderRadius: "32px",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <InformationBox
            Title={"Revenues"}
            Percentage={15}
            Profit={1}
            Subtext={"Increase compared to last week"}
            BottomButton={"Revenues report"}
            boxHeightPercentage={windowHeight * firstRowHeightPercentage}
          />

          <InformationBox
            Title={"Lost deals"}
            Percentage={4}
            Profit={0}
            Subtext={"You closed 96 out of 100 deals"}
            BottomButton={"All deals"}
            boxHeightPercentage={windowHeight * firstRowHeightPercentage}
          />
          <Goals
            Title={"Quarter goal"}
            Percentage={84}
            BottomButton={"All goals"}
            boxHeightPercentage={windowHeight * firstRowHeightPercentage}
          />
        </div>
        <div
          className="secondRow"
          style={{
            display: "flex",
            borderRadius: "32px",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Customers
            title={"Customers"}
            customerData={customerData}
            BottomButton={"All customers"}
            boxHeightPercentage={windowHeight * secondRowHeightPercentage}
          />

          <div
            style={{ display: "flex", flex: "wrap", flexDirection: "column" }}
          >
            <Growth
              Title={"Growth"}
              boxHeightPercentage={
                0.5 * windowHeight * secondRowHeightPercentage
              }
            />
            <div style={{ display: "flex" }}>
              <TopMonth
                Title="Top Month"
                boxHeightPercentage={
                  0.3 * windowHeight * secondRowHeightPercentage
                }
              />
              <TopYear
                Title="Top Year"
                boxHeightPercentage={
                  0.3 * windowHeight * secondRowHeightPercentage
                }
              />
              <TopBuyer
                Title="Top Buyer"
                topBuyer={topBuyer}
                boxHeightPercentage={
                  0.3 * windowHeight * secondRowHeightPercentage
                }
              />
            </div>
          </div>
        </div>
        <div
          className="thirdRow"
          style={{
            display: "flex",
            borderRadius: "32px",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Chats
            title={"Chats"}
            messages={messages}
            boxHeightPercentage={windowHeight * thirdRowHeightPercentage}
          />
          <TopStates
            title={"Top States"}
            topStates={topStates}
            boxHeightPercentage={windowHeight * thirdRowHeightPercentage}
          />
          <NewDeals
            title={"New Deals"}
            newDeals={newDeals}
            boxHeightPercentage={windowHeight * thirdRowHeightPercentage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
