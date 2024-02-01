# Toshiba Assignment - React Dashboard

## Index

1. [Overview](#overview)

   - [Deployment Links](#deployment-links)
   - [Frontend Dependencies](#frontend-dependencies)
   - [Backend Dependencies](#backend-dependencies)
   - [Installation Steps](#installation-steps)

2. [Frontend Structure](#frontend-structure)

   - [Menu.jsx](#menujsx)
   - [InformationBox.jsx](#informationboxjsx)
   - [QuarterGoal.jsx](#quartergoaljsx)
   - [Customers.jsx](#customersjsx)
   - [Growth.jsx](#growthjsx)
   - [TopMonth.jsx](#topmonthjsx)
   - [TopYear.jsx](#topyearjsx)
   - [TopBuyer.jsx](#topbuyerjsx)
   - [Chats.jsx](#chatsjsx)
   - [TopStates.jsx](#topstatesjsx)
   - [NewDeals.jsx](#newdealsjsx)

3. [Backend Structure](#backend-structure)

   - [Function: `downsampleData`](#function-downsampledata)
     - [Parameters](#parameters)
     - [Example Usage](#example-usage)
     - [Data Grouping](#data-grouping)
     - [Error Handling](#error-handling)
     - [Supported Time Units](#supported-time-units)
     - [Output](#output)
   - [Function: `getMaxProfitInfo`](#function-getmaxprofitinfo)
     - [Parameters](#parameters-1)
     - [Example Usage](#example-usage-1)
     - [Functionality](#functionality)
     - [Error Handling](#error-handling-1)
     - [Output](#output-1)

4. [Note](#note)

## Overview

This project is a React-based dashboard application for Toshiba, consisting of both frontend and backend components. The frontend provides a user interface with various components displaying information and statistics, while the backend handles data processing and serves it to the frontend.

### Deployment Links

- Frontend: [Toshiba Dashboard](https://toshiba-project.vercel.app/)
- Backend: [Toshiba Backend](https://toshiba-project-backend.onrender.com/)

### Frontend Dependencies

Make sure to install the following dependencies for the client (frontend):

- [tabler/icons-react](https://github.com/tabler/tabler-icons) - Icon library
- [axios](https://axios-http.com/) - HTTP client for making requests
- [react](https://reactjs.org/) - JavaScript library for building user interfaces
- [react-dom](https://reactjs.org/docs/react-dom.html) - Entry point to the DOM and server renderers for React
- [recharts](https://recharts.org/) - Charting library for React applications

To install the frontend dependencies, follow the steps below in the /client folder:

```bash
npm install
npm install tabler/icons-react axios react react-dom recharts
```

### Backend Dependencies

Make sure to install the following dependencies for the server (backend):

- [axios](https://axios-http.com/) - HTTP client for making requests
- [cors](https://expressjs.com/en/resources/middleware/cors.html) - Middleware for enabling Cross-Origin Resource Sharing
- [dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module that loads environment variables
- [express](https://expressjs.com/) - Web application framework for Node.js
- [papaparse](https://www.papaparse.com/) - CSV parsing library
- [node](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine

### Installation Steps

To install the backend dependencies, follow the steps below in the /server folder:

```bash
npm install axios cors dotenv express papaparse node
```

### Frontend Structure

The frontend consists of 11 React components:

1. **Menu.jsx**

   - Fixed on the left
   - Collapsible
   - Static buttons

2. **InformationBox.jsx**

   - Used for both Revenues and Lost Deals
   - Dynamic profit/loss icon
   - A button at the bottom

3. **QuarterGoal.jsx**

   - Dynamically shows the goal achieved using Recharts
   - Linked to DashboardInfo.jsx for current goal
   - A button at the bottom

4. **Customers.jsx**

   - Customers are pulled from DashboardInfo.jsx
   - Sortable by newest, oldest, and alphabetical order
   - Selectable with CSS shown
   - A button at the bottom

5. **Growth.jsx**

   - Uses backend to pull dynamic data
   - View by year, month, or day

6. **TopMonth.jsx**

   - Uses backend to pull dynamic data

7. **TopYear.jsx**

   - Uses backend to pull dynamic data

8. **TopBuyer.jsx**

   - Linked to DashboardInfo.jsx for the top buyer

9. **Chats.jsx**

   - Chats are pulled from DashboardInfo.jsx
   - Subheading displays 'n unread messages'
   - Unread messages shown with CSS

10. **TopStates.jsx**

    - Top states are pulled from DashboardInfo.jsx
    - Displayed in a sorted bar chart

11. **NewDeals.jsx**
    - New deals are pulled from DashboardInfo.jsx
    - Deals can be selected when clicked

### Backend Structure

The backend server pulls a dataset in CSV format from a raw GitHub link, uses `papaparse` to parse the CSV to JSON, and serves the data to the frontend. The server includes a function called `downsampleData(data, timeUnit)` for downsampling data by grouping it based on the specified time unit and calculating the mean. Proper error handling is implemented to provide accurate status responses.

## Function: `downsampleData`

This JavaScript function takes an array of data points with timestamps and profit percentages and groups them based on a specified time unit. The purpose of this function is to downsample the data, aggregating profit percentages over specified time intervals.

### Parameters

- `data`: An array of data points, where each entry should have a `Timestamp` and `ProfitPercentage` property.
- `timeUnit`: A string specifying the time unit for grouping the data. Supported values are "day," "month," and "year."

### Example Usage

```javascript
const data = [
  { Timestamp: "2022-01-01 12:00:00", ProfitPercentage: 30.8899991273 },
  { Timestamp: "2022-01-01 14:30:00", ProfitPercentage: 28.2183913922 },
  // ... more data entries
];

const downsampledData = downsampleData(data, "day");
```

### Data Grouping

The function groups data based on the provided `timeUnit`. It calculates the average profit percentage for each time interval and returns a new array of objects containing timestamps and corresponding downsampled profit percentages.

### Error Handling

- If an entry has an invalid timestamp or is missing a timestamp, the function logs an error message to the console.

### Supported Time Units

- "day": Groups data by day.
- "month": Groups data by month.

- "year": Groups data by year.

### Output

The function returns an array of objects with downsampled data, each containing a timestamp and the corresponding downsampled profit percentage.

### Example Output

```javascript
[
  { Timestamp: "2022-01-01", ProfitPercentage: 227.1928381293 },
  // ... more downsampled entries
];
```

## Function: `getMaxProfitInfo`

This JavaScript function analyzes an array of data points containing timestamps and profit percentages. Its purpose is to identify and retrieve the entry with the highest profit percentage.

### Parameters

- `data`: An array of data points, where each entry should have a `Timestamp` and `ProfitPercentage` property.

### Example Usage

```javascript
const data = [
  { Timestamp: "2022-01-01 12:00:00", ProfitPercentage: 30.8899991273 },
  { Timestamp: "2022-01-01 14:30:00", ProfitPercentage: 28.2183913922 },
  // ... more data entries
];

const maxProfitInfo = getMaxProfitInfo(data);
```

### Functionality

The function iterates through the provided data and identifies the entry with the highest profit percentage. It returns an object containing the timestamp and corresponding maximum profit percentage.

### Error Handling

- If the provided data is not an array or is an empty array, the function returns `null`.

### Output

The function returns an object with information about the entry with the maximum profit percentage.

### Example Output

```javascript
{
  Timestamp: "2022-01-01 12:00:00",
  ProfitPercentage: 30.8899991273,
}
```

### Note

- In case of ties, the function returns the first occurrence of the maximum profit percentage.

## Note

- The project is mostly static except for the Growth component, which pulls data from the backend hosted on render.com.
- The static data is stored in `DashboardInfo.jsx`, acting as a pseudo-database for easy future implementation of a dynamic database.
