import clsx from 'clsx';
import s from './ArrowButton.module.scss';

export const ArrowButton = ({rotate=false}) => {
    return <button className={clsx({
        [s.button] : true,
        [s.rotate]: rotate})
        }>
        <img src="assets/arrow.svg" alt='' className={s.icon}/>
    </button>
}