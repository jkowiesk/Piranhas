import React from "react";
import clsx from "clsx";
import Set from "../Set/Set";

import s from "./ItemList.module.scss";

const ItemList = ({ className, items = [], rootRoute }) => {
  const itemList = items.map(({ courseName, name }) => {
    const routeUrl =
      courseName === "none"
        ? `${rootRoute}/${name}`
        : `${rootRoute}/${courseName}/${name}`;
    return <Set title={name} routeUrl={routeUrl} />;
  });

  return <div className={clsx(s.wrapper, className)}>{itemList}</div>;
};

export default ItemList;
