import s from './AddCardButton.module.scss';
import { Link } from 'react-router-dom';


const AddCardButton = ({link}) => {
    return (
    <Link to={link}>
    <button type="button" className={s.button} onClick={() => {}}>
        Add New Flashcard
    </button>
    </Link>
    )
}

export default AddCardButton;
