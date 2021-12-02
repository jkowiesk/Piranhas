import s from "./ItemName.moudle.scss";
import { NavLink } from "react-router-dom";

const ItemName = ({ name, routeUrl }) => {
  return (
    <NavLink to={routeUrl ? routeUrl : ""}>
      <h1>{name}</h1>
    </NavLink>
  );
};

export default ItemName;
