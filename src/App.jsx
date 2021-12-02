import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import MyCourses from "./pages/MyCourses/MyCourses";

import "./App.css";
import AddCourse from "./pages/AddCourse/AddCourse";
import Layout from "./components/UI/Layout/Layout";
import SetManager from "./pages/SetManager/SetManager";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-courses" element={<MyCourses />}></Route>
        <Route path="/my-courses/:courseName" element={<SetManager />} />
        <Route path="/my-courses/add-course" element={<AddCourse />} />
      </Routes>
    </Layout>
  );
};

export default App;
