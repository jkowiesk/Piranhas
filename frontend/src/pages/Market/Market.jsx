import ItemSection from "../../components/ItemSection/ItemSection";
import Card from "../../components/UI/Card/Card";
import { useState, useEffect } from "react";
import UserService from "../../services/UserService";

import s from "./Market.module.scss";

const Market = () => {
  const [marketSets, setMarketSets] = useState([]);
  useEffect(() => {
    UserService.getMarketSets().then((response) => {
      setMarketSets(response.data);
    });
  }, []);

  return (
    <Card title="Market" size="2">
      <ItemSection
        name=""
        items={marketSets}
        type="list"
        rootRoute="/market"
        className={s.content}
      />
    </Card>
  );
};

export default Market;
