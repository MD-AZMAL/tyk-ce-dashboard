import React from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import DashboardControlPage from "../DashboardControlPage/DashboardControlPage";
import DashboardResponsePage from "../DashboardResponsePage/DashboardResponsePage";

import "./DashboardPage.scss";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar className="dashboard-nav" />
      <DashboardSidebar className="dashboard-sidebar" />
      <div className="dashboard-main">
        <div className="dashboard-request-response">
          <DashboardControlPage />
          <DashboardResponsePage />
        </div>
      </div>
      <div className="dashboard-footer">
        <p>
          <small>&copy; InnoventSoft </small>
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
