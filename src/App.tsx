import "./App.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import AllCharacters from "./pages/Characters/AllCharacters";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Character from "./pages/Characteer/SingleCharacter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<AllCharacters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route
          path="*"
          element={<h1 className="page-title">404 NOT FOUND</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
