import React from "react";
import ItemList from "../ItemList/ItemList";

import s from "./ItemSection.module.scss";

const ItemSection = ({ name, items }) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{name}</h1>
      <ItemList items={items} className={s.items}/>
    </div>
  );
};

export default ItemSection;
