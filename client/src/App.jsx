import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
