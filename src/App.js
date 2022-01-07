import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <a href="./Home"> Home</a>
        <a href="./About"> About</a>
        <a href="./Profile">Profile</a>
      </div>
      <Routes>
        {/* homepage */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* profile page */}
        <Route path="/Profile" element={<Profile />} />
        {/* display books and descriptions */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
