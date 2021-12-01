import React from "react";
import ItemList from "../ItemList/ItemList";

import s from "./ItemSection.module.scss";

const ItemSection = ({ name, items }) => {
  return (
    <div>
      <h1>{name}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemSection;
