import s from './Card.module.scss';

const Card = ({children, title}) => {
    <div className={s.wrapper}>
        <div className={s.content}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </div>
    </div>
}

export default Card;