import { Link } from "react-router-dom";
import s from "./Set.module.scss";

const Set = ({ title, routeUrl, isPreview }) => {
  return (
    <Link to={routeUrl.toLowerCase()}>
      <div className={isPreview ? s.preview : s.normal}>
        <p className={s.title}>{title}</p>
      </div>
    </Link>
  );
};

export default Set;
