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
import FlashcardManger from "./pages/FlashcardManager/FlashcardManager";
import AddFlashcard from "./pages/AddFlashcard/AddFlashcard";
import SetPreview from "./pages/SetPreview/SetPreview";

import "./App.scss";

const App = () => {
  return (
    <LoginProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/market" element={<Market />} />
          <Route path="/market/:setName" element={<SetPreview />} />
          <Route path="/signIn" element={<SiginIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/card-form" element={<CardFormPage />} />
          <Route path="/my-courses/add-course" element={<AddCourse />} />
          <Route path="/my-courses/:courseName" element={<SetManager />} />
          <Route path="/my-courses/:courseName/add-set" element={<AddSet />} />
          <Route
            path="/my-courses/:courseName/:setName"
            element={<FlashcardManger />}
          />
          <Route
            path="/my-courses/:courseName/:setName/add-flashcard"
            element={<AddFlashcard />}
          />
        </Routes>
      </Layout>
    </LoginProvider>
  );
};

export default App;
