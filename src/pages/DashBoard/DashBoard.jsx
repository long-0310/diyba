import React, { useContext } from "react";
import { useEffect } from "react";
import Button from "../../Components/Button/Button";
import LayoutItem from "../../Components/LayoutItem/LayoutItem";
import MyPortfolio from "../../Components/MyPortfolio/MyPortfolio";
import WhishList from "../../Components/Whishlist/WishListDashboard";
import { AppContext } from "../../Context/AppContext";
import {
  ArrowRight,
  BathIcons,
  BathroomIcon,
  BedIcons,
  Business,
  CarsIcons,
  CircleArrowIcon,
  DropArrow,
  Home,
  MapIcons,
  MoneyIcon,
  MoneyIconLarge,
  MoneyLarge,
  SearchIcon,
} from "../../img/icons";
import "./dashboard.scss";

export default function DashBoard() {
  const { hide, toggleHide } = useContext(AppContext);

  console.log(hide);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1200 && hide === false) {
        toggleHide();
        // code của bạn để xử lý khi chiều rộng của window đạt đến 1025px ở đây
      }
    }

    window.addEventListener("resize", handleResize);

    // Xóa bỏ event listener khi component bị unmount để tránh memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, [hide]);

  return (
    <div className="dashboard">
      <p className="heading">Dashboard</p>
      <div className="dashboard-inside">
        <div className="dashboard-left">
          <LayoutItem style={"notificationMobile"} title="Notifications">
            <div className="notification">
              <div className="arrow">
                <ArrowRight />
              </div>
              <p className="notification-time">9 Sep 2022</p>
              <p className="notification-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis similique, quod assumenda porro est libero ipsa
                debitis modi magni ad.
              </p>
            </div>
          </LayoutItem>
          <MyPortfolio />
          <WhishList />
        </div>
        <div className="dashboard-right">
          <LayoutItem style={"notificationDesktop"} title="Notifications">
            <div className="notification">
              <div className="arrow">
                <ArrowRight />
              </div>
              <p className="notification-time">9 Sep 2022</p>
              <p className="notification-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis similique, quod assumenda porro est libero ipsa
                debitis modi magni ad.
              </p>
            </div>
          </LayoutItem>
          <LayoutItem title="pending properties">
            <div className="pending-title">You have no pending properties</div>
            <div className="pending-search">
              <SearchIcon /> Search properties
            </div>
          </LayoutItem>
          <LayoutItem title="Saved searches">
            <div className="save">
              <div className="save-option">
                <span className="save-option-span">
                  <Home /> Properties
                </span>
                <DropArrow />
              </div>
              <div className="save-info">
                <div className="arrow">
                  <ArrowRight />
                </div>
                <p className="save-info-content">
                  <MoneyLarge />
                  <span className="save-bold">Budgets:</span> $450k-$550k
                </p>
                <p className="save-info-content">
                  <Business />
                  <span className="save-bold">Objectives:</span> Cashflow
                </p>
                <p className="save-info-content">
                  <BedIcons />
                  <span className="save-bold">Bedrooms:</span> 4
                </p>
                <p className="save-info-content">
                  <BathIcons />
                  <span className="save-bold">Bathrooms:</span> 5
                </p>
                <p className="save-info-content">
                  <CarsIcons />
                  <span className="save-bold">Parking:</span> 3
                </p>
                <p className="save-info-content">
                  <MapIcons />
                  <span className="save-bold">States:</span> VIC, NSW, TAS, QLD
                </p>
              </div>
              <div className="save-btn">
                <button>
                  View all <CircleArrowIcon />
                </button>
                <button>
                  <SearchIcon /> New search
                </button>
              </div>
            </div>
          </LayoutItem>
        </div>
      </div>
    </div>
  );
}
