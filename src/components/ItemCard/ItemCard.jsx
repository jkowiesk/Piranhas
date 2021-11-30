import React, { useState } from "react";

import s from "./ItemCard.module.scss";

const ItemCard = ({ name }) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{name}</h1>
    </div>
  );
};

export default ItemCard;
