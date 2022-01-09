import ItemSection from "../../components/ItemSection/ItemSection";
import Card from "../../components/UI/Card/Card";
import { marketSets } from "../../mocks/courseCards";
import s from "./Market.module.scss";

const Market = () => {
  return (
  <Card title="Market" size="2">
    <ItemSection name="" items={marketSets} type="list" className={s.content}/>
  </Card>
  );
};

export default Market;
