import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./defaultPage.scss";
import proptrack from "../../img/proptrack.png";
import DomainLogo from "../../img/Domain_logo.png";
import { AppContext } from "../../Context/AppContext";

function DefaultPage(props) {
  const { hide } = useContext(AppContext);
  return (
    <div className="defaultPage">
      <div className="layout-default">
        <Sidebar />
        <div className={`layout-right ${hide ? "" : "menu-margin"} `}>
          <Navbar />
          <div className="layout-bottom">
            <Outlet />
          </div>
          <div className="footer">
            <p className="footer-left">
              Source: &nbsp;
              <img
                className="footer-img"
                height="16px"
                src={proptrack}
                alt=""
              />
            </p>
            <p className="footer-center">
              The market insights data is supplied by DIYBA Pty Ltd (ABN 35 641
              308 081) on behalf of PropTrack Pty Ltd (ABN 43 127 386 298).
              Copyright and legal disclaimers about property data
            </p>
            <p className="footer-left">
              Powered by: &nbsp;
              <img
                className="footer-img"
                height="16px"
                src={DomainLogo}
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;
