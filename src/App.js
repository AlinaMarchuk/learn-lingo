import "./App.css";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        {/* <Route path="/favorites" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </>
  );
}

export default App;
