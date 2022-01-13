import clsx from "clsx";
import s from "./Card.module.scss";

const Card = ({ children, className, title, size="0" || "1" || "2" }) => {
  return (
  <div className={clsx(s.wrapper, s[`wrapper--${size}`], className)}>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
  </div>
  )
};

export default Card;
