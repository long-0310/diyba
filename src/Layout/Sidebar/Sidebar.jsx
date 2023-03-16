import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { AppContext } from "../../Context/AppContext";
import logo from "../../img/logo.png";
import logoMobile from "../../img/logomobile.png";
import {
  AccountIcon,
  ContactIcon,
  DashboardIcon,
  LogoutIcon,
  NotiIcon,
  PendingIcon,
  PortfolioIcon,
  SearchIcon,
  WishlistIcon,
} from "../../img/icons";

export default function Sidebar() {
  const { hide } = useContext(AppContext);

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

  return (
    <nav
      className={`sidebar ${hide ? "hide-menu" : ""}`}
      style={{ height: "100vh" }}
    >
      {hide ? (
        <div>
          <img src={logoMobile} width="36px" alt="Diyba" />
        </div>
      ) : (
        <img src={logo} alt="Diyba" width="141px" />
      )}

      <div className="sidebar-nav">
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
                <div className="active-block"></div>
                {link.icon}
                {hide ? "" : link.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
