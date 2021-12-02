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

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="front">Card Front</label>
          <input type="text" id="front" />
        </div>
        <div>
          <label htmlFor="back">Card Back</label>
          <input type="text" id="back" />
        </div>
        <div>
          <Select options={options} />
        </div>
      </div>
      <button> Subbmit </button>
    </form>
  );
};

export default CardForm;
