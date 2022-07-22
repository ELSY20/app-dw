import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}

export default App;
