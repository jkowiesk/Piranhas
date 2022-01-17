import React from "react";
import ItemList from "../ItemList/ItemList";
import { CourseCarousel } from "../CourseCarousel/CourseCarousel";

import s from "./ItemSection.module.scss";

const ItemSection = ({
  name,
  items,
  rootRoute,
  type = "list" | "carousel",
}) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{name}</h1>
      {type === "list" && <ItemList items={items} rootRoute={rootRoute} />}
      {type === "carousel" && (
        <CourseCarousel items={items} rootRoute={rootRoute} />
      )}
    </div>
  );
};

export default ItemSection;
