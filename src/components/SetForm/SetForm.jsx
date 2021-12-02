import s from "./SetForm.module.scss";

const SetForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    console.log("submitted");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="name">Set Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <button> Subbmit </button>
    </form>
  );
};

export default SetForm;
