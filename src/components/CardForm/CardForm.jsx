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

    return <form onSubmit={submitHandler}>
        <div>
            <div>
                <label htmlFor="front">Card Front</label>
                <input type="text" id="front"/>
            </div>
            <div>
                <label htmlFor="back">Card Back</label>
                <input type="text" id="back"/>
            </div>
            <div>
                <Select options={options} />
            </div>
        </div>
    </form>
}

export default CardForm;