import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/Homepage";
import MyCourses from "./pages/MyCourses/MyCourses";
import AddCourse from "./pages/AddCourse/AddCourse";
import Layout from "./components/UI/Layout/Layout";
import SetManager from "./pages/SetManager/SetManager";
import AddSet from "./pages/AddSet/AddSet";
import CardFormPage from "./pages/CardFormPage/CardFormPage";
import Market from "./pages/Market/Market";
import SiginIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { LoginProvider } from "./components/LoginContext/LoginContext";

import "./App.scss";

const App = () => {
  return (
    <LoginProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market" element={<Market />} />
          <Route path="/signIn" element={<SiginIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/card-form" element={<CardFormPage />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/my-courses/:courseName" element={<SetManager />} />
          <Route path="/my-courses/:courseName/add-set" element={<AddSet />} />
          <Route path="/my-courses/add-course" element={<AddCourse />} />
        </Routes>
      </Layout>
    </LoginProvider>
  );
};

export default App;
