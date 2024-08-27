import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Enrollment">Student Form</Link>
        </li>
        <li>
          <Link to="/TicTacToe">Tic_Tac-Toe</Link>
        </li>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/TodoList">TodoList</Link>
        </li>
        <li>
          <Link to="/sheet">Marksheet</Link>
        </li>
        <li>
          <Link to="/Text">Text</Link>
        </li>
       
        <li>
          <Link to="/AnimatedCard">AnimatedCard</Link>
        </li>
        <li>
          <Link to="/Quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
