import s from "./CardForm.module.scss";
import Select from "react-select";
import { myCourses } from "../../mocks/courseCards";

const CardForm = () => {
  let setsName = myCourses
    .map((course) => course.items.map((item) => item.name))
    .flat();

  const options = setsName.map((name) => {
    return { value: name, label: name };
  });

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("submitted");
  };

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
  );
};

export default CardForm;
