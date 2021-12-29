import s from "./Card.module.scss";

const Card = ({ children, title }) => {
  return (
  <div className={s.wrapper}>
      <h1 className={s.title}>{title}</h1>
      {children}
  </div>
  )
};

export default Card;
