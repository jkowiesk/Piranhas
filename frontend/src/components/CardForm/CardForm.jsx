import s from "./CardForm.module.scss";
import Select from "react-select";
import { myCourses } from "../../mocks/courseCards";
import Card from "../UI/Card/Card";

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

  return (
    <Card size="2" title="Card Form">
    <form onSubmit={submitHandler} className={s.form}>
      <div>
        <div className={s.inputBlock}>
          <label htmlFor="front">Card Front</label>
          <input type="text" id="front" className={s.input} />
        </div>
        <div className={s.inputBlock}>
          <label htmlFor="back">Card Back</label>
          <input type="text" id="back" className={s.input} />
        </div>
        <div className={s.inputBlock}>
          <label htmlFor="back">Select Set</label>
          <Select className={s.select} options={options} />
        </div>
      </div>
      <div className={s.inputBlock}>
        <button type="button" className={s.button}>
          {" "}
          Subbmit{" "}
        </button>
      </div>
    </form>
    </Card>
  );
};

export default CardForm;
