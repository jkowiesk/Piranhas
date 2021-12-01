import s from './CardForm.module.scss';
import Select from 'react-select';
import { folders } from '../../mocks/courseCards';

const CardForm = () => {
    const options = folders.map(folder => {
        return {value: folder, label: folder}
    });


    const submitHandler = event => {
        event.preventDefault();

        console.log("submitted");
    }

    return <form onSubmit={submitHandler} className={s.form}>
        <div>
            <div className={s.inputBlock}>
                <label htmlFor="front">Card Front</label>
                <input type="text" id="front" className={s.input}/>
            </div>
            <div className={s.inputBlock}>
                <label htmlFor="back">Card Back</label>
                <input type="text" id="back" className={s.input}/> 
            </div>
            <div className={s.inputBlock}>
                <Select options={options} />
            </div>
        </div>
        <div className={s.inputBlock}>
            <h3>Select folder</h3>
            <button type="button" className={s.button}> Subbmit </button>
        </div>
    </form>
}

export default CardForm;