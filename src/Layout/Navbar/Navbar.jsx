import React, { useContext } from "react";
import { HiddenIcon, MobileNav, UserIcon } from "../../img/icons";
import "./navbar.scss";
import logo from "../../img/logo.png";
import { AppContext } from "../../Context/AppContext";
import NavMobile from "../../Components/NavMobile/NavMobile";

function Navbar() {
  const { hide, toggleHide } = useContext(AppContext);
  const { open, setIsOpen } = useContext(AppContext);

  const toggleHideMenu = () => {
    toggleHide();
  };

  return (
    <div className="navbar">
      <div className="navbar-inside">
        <div onClick={setIsOpen} className="mobileNav">
          <MobileNav />
        </div>
        <div onClick={toggleHideMenu} className="navbar-inside-left">
          <HiddenIcon />
          {hide ? "Show menu" : "Hide menu"}
        </div>
        <div className="mobileLogo">
          <img src={logo} width="88px" alt="" />
        </div>
        <div className="navbar-inside-right">
          <div className="nav-title">
            <p className="nav-title-name">Bill Smith</p>
            <p className="nav-title-position">Owner</p>
          </div>
          <div className="nav-icon">
            <UserIcon />
          </div>
        </div>
      </div>
      {open ? <NavMobile /> : <></>}
    </div>
  );
}

export default Navbar;
