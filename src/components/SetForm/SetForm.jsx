import CustomButton from "../CustomButton/CustomButton";
import InputText from "../InputText/InputText";
import Card from "../UI/Card/Card";
import s from "./SetForm.module.scss";

const SetForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    console.log("submitted");
  };

  return (
    <Card onSubmit={submitHandler} size="2" title="Set Form" className={s.wrapper}>
      <div className={s.content}>
          <InputText label="Set Name" type="text"/>
      </div>
      <CustomButton> Subbmit </CustomButton>
    </Card>
  );
};

export default SetForm;
