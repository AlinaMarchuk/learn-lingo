import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route
          path="/favorites"
          element={<PrivateRoute redirectTo="/" component={<Favorites />} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
