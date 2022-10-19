import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login";
import Register from "./Register";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);
}


