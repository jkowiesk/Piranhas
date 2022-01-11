import React from "react";
import clsx from "clsx";
import Set from "../Set/Set";

import s from "./ItemList.module.scss";

const ItemList = (props) => {
  const itemList = props.items.map(({ courseName, name }) => {
    const routeUrl = `${props.rootRoute}${courseName}/${name}`;
    return (
      <Set title={name} routeUrl={props.rootRoute ? routeUrl : `${name}`} />
    );
  });

  return <div className={clsx(s.wrapper, props.className)}>{itemList}</div>;
};

export default ItemList;
