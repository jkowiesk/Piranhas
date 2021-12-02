import s from './AddCardButton.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';


const AddCardButton = (className, link) => {
    return (
    <Link to={link}>
    <button type="button" className={clsx(s.button, className)} onClick={() => {}}>
        Add New Flashcard
    </button>
    </Link>
    )
}

export default AddCardButton;
