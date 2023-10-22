import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/teachers" element={<div>Teachers</div>}></Route>
          {/* <Route path="/favorites" element={<Navigate to={"/"} />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
