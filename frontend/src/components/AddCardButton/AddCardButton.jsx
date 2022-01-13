import s from "./AddCardButton.module.scss";
import { Link } from "react-router-dom";

const AddCardButton = ({ label, link }) => {
  return (
    <Link to={link}>
      <button type="button" className={s.button} onClick={() => {}}>
        {label}
      </button>
    </Link>
  );
};

export default AddCardButton;
