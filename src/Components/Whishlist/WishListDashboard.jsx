import React from "react";
import {
  BathroomIcon,
  BedroomIcon,
  CartIcon,
  ChartIcon,
  CircleArrowIcon,
  Heart,
  Home1,
  Map,
  ScaleIcon,
  TagMoney,
} from "../../img/icons";
import LayoutItem from "../LayoutItem/LayoutItem";
import "./wishlistdashboard.scss";

function WhishList() {
  const lists = [
    {
      name: "31 Newry Street Mountain Creek QLD 4557",
      img: "https://mediavault.point2.com/p2a/htmltext/c21c/891c/128e/9f0cc89c813dab22852b/original.jpg",
      offer: "644,000",
      bed: 4,
      barth: 4,
      park: 6,
      area: 675,
      range: [{ ranking: "none" }],
    },
    {
      name: "6093 Nauru St, Cypress, CA 90630",
      img: "https://www.buildofy.com/blog/content/images/2022/06/_DSC9610-Edited_-min.jpg",
      offer: "389,000",
      bed: 5,
      barth: 7,
      park: 6,
      area: 413,
      view: true,
      range: [
        { ranking: "high" },
        {
          low: "356.000",
          mid: "567.000",
          high: "870.000",
        },
      ],
    },
    {
      name: "6469 Dominica Ave #3582, Cypress, CA 90630",
      img: "https://interiorlover.in/wp-content/uploads/2021/04/The-Studio-JAR44.jpg",
      offer: "974,000",
      bed: 8,
      barth: 8,
      park: 12,
      area: 780,
      view: null,
      range: [
        { ranking: "mid" },
        {
          low: "356.000",
          mid: "567.000",
          high: "870.000",
        },
      ],
    },
    {
      name: "12111 Valley View St, Garden Grove, CA 92845",
      img: "https://interiorlover.in/wp-content/uploads/2021/04/PicsArt_04-15-01.54.52.jpg",
      offer: "432,000",
      bed: 4,
      barth: 4,
      park: 6,
      area: 485,
      view: null,
      range: [
        { ranking: "low" },
        {
          low: "356.000",
          mid: "567.000",
          high: "870.000",
        },
      ],
    },
  ];

  return (
    <div className="wish-list">
      <LayoutItem title="Wishlist(32)">
        <div className="btn-lists">
          <button className="btn-lists-top active">
            <Home1 /> Properties
          </button>
          <button className="btn-lists-top">
            <Map /> Markets
          </button>
        </div>
        {lists.map((item, idx) => (
          <div key={idx} className="wish-list-card">
            <div className="card-img">
              <img src={item.img} alt="" />
            </div>
            <div className="card-content">
              <div className="card-content-top">
                <p className="heading-wishlist">{item.name}</p>
                <CircleArrowIcon />
                <Heart />
              </div>
              <p className="offer-title">Offer from $ {item.offer}</p>
              <div className="wishlist-desc">
                <div className="wishlist-info">
                  <BedroomIcon /> <span>{item.bed}</span>&nbsp;beds
                </div>
                <div className="wishlist-info">
                  <BathroomIcon /> <span>{item.barth}</span>&nbsp;barth
                </div>
                <div className="wishlist-info">
                  <CartIcon /> <span>{item.park}</span>&nbsp;park
                </div>
                <div className="wishlist-info">
                  <ScaleIcon /> <span>{item.area}</span>&nbsp;m2
                </div>
              </div>
              <div className="card-content-bottom">
                <div className="bottom-top">
                  <TagMoney /> Potential value:
                </div>
                <div className="range">
                  {item.range[0].ranking === "none" ? (
                    <div className="view-content">
                      <span>View property for updated values</span>
                      <CircleArrowIcon />
                    </div>
                  ) : (
                    ""
                  )}
                  {item.range[0].ranking === "low" ? (
                    <div className="insideRange">
                      <div className="range-left">
                        <div className="range-content">
                          <p className="range-desc">Low range </p>
                          <p className="range-offer">${item.range[1].low}</p>
                        </div>
                        <div className="range-content">
                          <p className="range-desc">Mid range </p>
                          <p className="range-offer">${item.range[1].mid}</p>
                        </div>
                        <div className="range-content">
                          <p className="range-desc">High range </p>
                          <p className="range-offer">${item.range[1].high}</p>
                        </div>
                      </div>
                      <div className="range-btn low">Low Confidence</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.range[0].ranking === "mid" ? (
                    <div className="insideRange">
                      <div className="range-left">
                        <div className="range-content">
                          <p className="range-desc">Low range </p>
                          <p className="range-offer">${item.range[1].low}</p>
                        </div>
                        <div className="range-content">
                          <p className="range-desc">Mid range </p>
                          <p className="range-offer">${item.range[1].mid}</p>
                        </div>
                        <div className="range-content">
                          <p className="range-desc">High range </p>
                          <p className="range-offer">${item.range[1].high}</p>
                        </div>
                      </div>
                      <div className="range-btn mid">Medium Confidence</div>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.range[0].ranking === "high" ? (
                    <div className="insideRange">
                      <div className="range-left">
                        <div className="range-content">
                          <p className="range-desc">Low range </p>
                          <p className="range-offer">${item.range[1].low}</p>
                        </div>
                        <div className="range-content">
                          <p className="range-desc">Mid range </p>
                          <p className="range-offer">${item.range[1].mid}</p>
                        </div>
                        <div className="range-content">
                          <p className="range-desc">High range </p>
                          <p className="range-offer">${item.range[1].high}</p>
                        </div>
                      </div>
                      <div className="range-btn high">High Confidence</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className="wishlist-btn">
          View all <CircleArrowIcon />
        </button>
      </LayoutItem>
    </div>
  );
}

export default WhishList;
