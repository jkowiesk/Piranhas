import React from "react";
import ItemList from "../ItemList/ItemList";
import { SetsCarousel } from "../SetsCarousel/SetsCarousel";

import s from "./ItemSection.module.scss";

const ItemSection = ({ name, items, rootRoute, type="list" | "carousel" }) => {
  return (
    <div className={s.wrapper}>
      <h1>{name}</h1>
      {type === "list" && <ItemList items={items} rootRoute={rootRoute} />}
      {type === "carousel" && <SetsCarousel items={items} rootRoute={rootRoute}/>}
    </div>
  );
};

export default ItemSection;
