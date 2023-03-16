import React from "react";
import { CircleIcon } from "../../img/icons";
import "./layoutItem.scss";

function LayoutItem({ title, children, style }) {
  return (
    <div className={`layout ${style}`}>
      <div className="layout-top">
        <p>{title}</p>
        <CircleIcon />
      </div>
      {children}
    </div>
  );
}

export default LayoutItem;
