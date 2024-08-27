import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import MarkSheetForm from "./components/Marksheet/Marksheet";
import Text from "./components/Helpful Text/Text";
import Enrollment from "./components/studentForm/studentForm";
import Calculator from "./components/Calculator/Calculator";
import TodoList from "./components/todo/TodoList";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Quiz from "./components/Quiz/Quiz";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import AnimatedCard from "./components/CocoCola/ColaCola"



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Text" element={<Text />} />
          <Route path="/sheet" element={<MarkSheetForm />} />
          <Route path="/Enrollment" element={<Enrollment />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          {/* <Route path="/Quiz" element={<Quiz />} /> */}
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/AnimatedCard" element={<AnimatedCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
