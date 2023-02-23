import React from "react";
import {
  ChartIcon,
  CircleArrowIcon,
  CircleIcon,
  GrossIcon,
  Home,
  MoneyIcon,
  NetIcon,
} from "../../img/icons";
import CartPortfolio from "../CartPortfolio/CartPortfolio";
import LayoutItem from "../LayoutItem/LayoutItem";
import "./myportfolio.scss";

function MyPortfolio() {
  const lists = [
    { icon: <ChartIcon />, gear: "$84,220", title: "Potential equity" },
    { icon: <MoneyIcon />, gear: "$32,000", title: "Projected cashflow" },
    { icon: <GrossIcon />, gear: "5.4%", title: "Gross yield" },
    { icon: <NetIcon />, gear: "1.2%", title: "Net yield" },
  ];
  const CartLists = [
    {
      img: "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
      heading: "23 Elizabeth Street, Currumbin Waters, WA 6105",
      offer: "330,000",
      bed: 4,
      barth: 6,
      park: 3,
      area: 512,
      since: "12 March, 2020 (3.5 years)",
      potential: "4,999",
      net: 9.2,
    },
    {
      img: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607",
      heading: "12111 Valley View St, Garden Grove, CA 92845",
      offer: "240,000",
      bed: 12,
      barth: 20,
      park: 12,
      area: 680,
      since: "12 March, 2021 (3.5 years)",
      potential: "9,999",
      net: 9.0,
    },
    {
      img: "https://gaxa.vn/wp-content/uploads/2022/06/modern-house.jpg",
      heading: "6093 Nauru St, Cypress, CA 90630",
      offer: "220,000",
      bed: 5,
      barth: 10,
      park: 8,
      area: 710,
      since: "12 March, 2021 (3.5 years)",
      potential: "6.798",
      net: 8.0,
    },
    {
      img: "https://www.myhousedesignbuild.com/wp-content/uploads/2022/02/MyHouse-coquitlam-gem-1920x1080-1.jpg",
      heading: "6469 Dominica Ave #3582, Cypress, CA 90630",
      offer: "200,000",
      bed: 6,
      barth: 9,
      park: 3,
      area: 810,
      since: "12 March, 2021 (3.5 years)",
      potential: "7.298",
      net: 8.2,
    },
  ];

  return (
    <div className="portfolio">
      <LayoutItem title="My portfolio (3 properties)">
        <div className="info">
          <div className="row">
            {lists.map((list, idx) => (
              <div key={idx} className="col-3">
                <div className="info-inside">
                  <div className="info-heading">
                    {list.icon} {list.title}
                  </div>
                  <p className="info-title">{list.gear}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {CartLists.map((info, idx) => (
          <CartPortfolio
            idx={idx}
            key={idx}
            img={info.img}
            heading={info.heading}
            offer={info.offer}
            bed={info.bed}
            barth={info.barth}
            park={info.park}
            area={info.area}
            since={info.since}
            potential={info.potential}
            net={info.net}
          />
        ))}
        <div className="portfolio-bottom">
          <button className="portfolio-btn">
            View all <CircleArrowIcon />
          </button>
          <button className="portfolio-btn">
            <Home /> Import property
          </button>
        </div>
      </LayoutItem>
    </div>
  );
}

export default MyPortfolio;
