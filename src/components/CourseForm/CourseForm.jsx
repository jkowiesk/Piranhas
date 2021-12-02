import s from "./CourseForm.module.scss";

const CourseForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    console.log("submitted");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="name">Course Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <button> Submit </button>
    </form>
  );
};

export default CourseForm;
