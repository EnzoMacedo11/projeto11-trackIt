import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habit from "./Habit.js";
import Historic from "./Historic.js";
import Login from "./Login";
import Register from "./Register";
import Today from "./Today.js";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/habitos" element={<Habit/>}/>
      <Route path="/hoje" element={<Today/>}/>
      <Route path="/historico" element={<Historic/>}/>
    </Routes>
  </BrowserRouter>
);
}


