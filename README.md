# Toshiba Assignment - React Dashboard

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
npx create vite@latest . -- --template react
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

   - Linked to DashboardInfo.jsx for the top month

7. **TopYear.jsx**

   - Linked to DashboardInfo.jsx for the top year

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

### Note

- The project is mostly static except for the Growth component, which pulls data from the backend hosted on render.com.
- The static data is stored in `DashboardInfo.jsx`, acting as a pseudo-database for easy future implementation of a dynamic database.

Feel free to explore the provided deployment links and customize the project according to your needs. If you have any questions or encounter issues, please refer to the provided documentation or contact the project contributors.