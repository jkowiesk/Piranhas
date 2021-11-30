import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import MyCourses from "./pages/MyCourses/MyCourses";

import "./App.css";
import AddCard from "./pages/AddCard/AddCard";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
