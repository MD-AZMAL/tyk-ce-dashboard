import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tykConnections } from "../../config";
import {
  setActiveId,
  setTykServer,
} from "../../redux/tykServer/tykServerSlice";
import "./DashboardSidebar.scss";

const DashboardSidebar = ({ className }) => {
  const dispatch = useDispatch();
  const activeId = useSelector((state) => state.tykServer.activeId);

  const handleElementConfig = (tykServer) => {
    dispatch(setTykServer(tykServer));
    dispatch(setActiveId(tykServer.id));
  };

  return (
    <div className={className}>
      <div className="dashboard-sidebar-header">
        <h2>InnoventSoft</h2>
        <h3>Tyk</h3>
      </div>
      <div className="dashboard-sidebar-container">
        {tykConnections.map(({ id, name, url, secret }) => (
          <div
            className={`dashboard-sidebar-content ${
              activeId === id ? "active" : ""
            }`}
            key={id}
            onClick={() => handleElementConfig({ id, name, url, secret })}
          >
            <p>{name}</p>
            <p className="dashboard-sidebar-content--light">{url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
