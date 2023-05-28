import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Accueil from "./screens/Accueil";
import Login from "./screens/Login";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute page={<Accueil />} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
