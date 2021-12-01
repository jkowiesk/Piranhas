import s from "./Card.module.scss";

const Card = ({ children, name }) => {
  <div className={s.wrapper}>
    <div className={s.content}>
      <h1 className={s.title}>{name}</h1>
      {children}
    </div>
  </div>;
};

export default Card;
