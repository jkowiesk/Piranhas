import Header from "./components/header/header.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
