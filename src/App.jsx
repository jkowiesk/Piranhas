import Header from "./components/header/header.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import MyCourses from "./pages/my-courses/my-courses.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>
    </div>
  );
}

export default App;
