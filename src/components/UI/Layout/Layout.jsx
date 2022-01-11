import Header from "../../Header/Header";
import s from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
