import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import clsx from 'clsx';

import s from "./ItemList.module.scss";

const ItemList = (props) => {
  // console.log(props);
  const itemList = props.items.map(({ name }) => <ItemCard name={name} />);

  return <div className={clsx(s.wrapper, props.className)}>{itemList}</div>;
};

export default ItemList;
