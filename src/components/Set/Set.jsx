import s from './Set.module.scss';

const Set = ({title}) => {
    return <div className={s.wrapper}>
        <p className={s.title}>{title}</p>
    </div>
}

export default Set;