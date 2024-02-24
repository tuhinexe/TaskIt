import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Pages/Login/index";
import Teams from "./Pages/Teams";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<h1>dashboard</h1>} />
        <Route path="/teams" element={<Teams />} />
      </Route>
    </Routes>
  );
}

export default App;
