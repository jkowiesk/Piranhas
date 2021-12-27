import s from "./CustomButton.module.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className={s.customBtn} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
