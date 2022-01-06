import React from "react";
import ItemList from "../ItemList/ItemList";

import s from "./ItemSection.module.scss";

const ItemSection = ({ name, items, rootRoute }) => {
  return (
    <div className={s.wrapper}>
      <h1>{name}</h1>
      <ItemList items={items} rootRoute={rootRoute} />
    </div>
  );
};

export default ItemSection;
