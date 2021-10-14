import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { checkTykServerApi } from "../../api/apiCall";
import { setApiResponse } from "../../redux/apiResponse/apiResponseSlice";

import "./DashboardNavbar.scss";

const DashboardNavbar = ({ className }) => {
  const tykServer = useSelector((state) => state.tykServer.tykServer);
  const dispatch = useDispatch();

  const handleCheckServer = async () => {
    const [error, data] = await checkTykServerApi({ url: tykServer.url });
    error ? dispatch(setApiResponse(error)) : dispatch(setApiResponse(data));
  };

  return (
    <div className={className}>
      {tykServer && (
        <div className="dashboard-nav-content">
          <h3>{tykServer.name}</h3>
          <p>{tykServer.url}</p>
          <div className="dashboard-nav-content--button">
            <Button color="green" size="mini" onClick={handleCheckServer}>
              Check Server
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
