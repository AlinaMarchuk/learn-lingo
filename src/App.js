import "./App.css";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/favorites" component={<Home />} />
            }
          ></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route
            path="/favorites"
            element={<PrivateRoute redirectTo="/" component={<Favorites />} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
