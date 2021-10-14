import React from "react";
import { useSelector } from "react-redux";

import "./DashboardResponsePage.scss";

const DashboardResponsePage = () => {
  const apiResponse = useSelector((state) => state.apiResponse.response);
  return (
    <div className="dashboard-response">
      <pre>{JSON.stringify(apiResponse, undefined, 2)}</pre>
    </div>
  );
};

export default DashboardResponsePage;
