import React, { useContext } from "react";
import {
  AccountIcon,
  ContactIcon,
  DashboardIcon,
  IconClosed,
  LogoutIcon,
  NotiIcon,
  PendingIcon,
  PortfolioIcon,
  SearchIcon,
  WishlistIcon,
} from "../../img/icons";
import "./navMobile.scss";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const NavMobile = () => {
  let activeStyle = {
    color: "white",
    backgroundColor: "#F58E6A",
  };

  const links = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "My portfolio",
      link: "/portfolio",
      icon: <PortfolioIcon />,
    },
    {
      name: "Pending properties",
      link: "/pending",
      icon: <PendingIcon />,
    },
    {
      name: "Search",
      link: "/search",
      icon: <SearchIcon />,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <NotiIcon />,
    },
    {
      name: "Wishlist",
      link: "/wishlist",
      icon: <WishlistIcon />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <ContactIcon />,
    },
    {
      name: "Account",
      link: "/account",
      icon: <AccountIcon />,
    },
    {
      name: "Logout",
      link: "/logout",
      icon: <LogoutIcon />,
    },
  ];

  const { open, setIsOpen } = useContext(AppContext);

  const setHideMenu = () => {
    setIsOpen();
  };
  return (
    <div className="nav-mobile" style={{ height: "100vh" }}>
      <div className="nav-mobile-top">
        <img src={logo} width="88px" alt="" />
        <div onClick={setHideMenu} className="close-mobile-btn">
          <IconClosed />
        </div>
      </div>
      <div className="nav-mobile-bottom">
        {links.map((link, idx) => {
          return (
            <div key={idx}>
              {link.name === "Logout" && <div className="line"></div>}
              <NavLink
                key={idx}
                to={link.link}
                className="sidebar-list"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {link.icon}
                {link.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavMobile;
