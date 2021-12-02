import React from "react";
import ItemList from "../ItemList/ItemList";
import ItemName from "../ItemName/ItemName";

import s from "./ItemSection.module.scss";

const ItemSection = ({ name, items, routeUrl }) => {
  return (
    <div className={s.wrapper}>
      {name !== "" && <ItemName name={name} routeUrl={routeUrl} />}
      <ItemList items={items} />
    </div>
  );
};

export default ItemSection;
