import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import MyCourses from "./pages/MyCourses/MyCourses";

import "./App.css";
import AddCard from "./pages/AddCard/AddCard";
import Layout from "./components/UI/Card/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
    </Layout>
  );
}

export default App;
