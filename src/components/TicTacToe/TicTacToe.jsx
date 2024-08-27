import React, { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import FancyButton from "./Button";
import ticTacToeImage from '../../images/tic-tac-toe-game.svg';
import bgImage from "../../images/bg_tictactoe.jpeg"
import './TicTacToe.css';

const TicTacToe = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [turno, setTurno] = useState(true); // true for player 'X', false for computer 'O'
  const [winner, setWinner] = useState(null);
  const [count, setCount] = useState(0);
  const [firstPlayer, setFirstPlayer] = useState("X"); // To keep track of who starts
  const [isExploding, setIsExploding] = useState(false);
  const [confettiKey, setConfettiKey] = useState(Date.now());
  const [isDraw, setIsDraw] = useState(false);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    if (count === 9 && !winner) {
      setWinner("Draw");
      setIsDraw(true);
    }
  }, [count, winner]);

  useEffect(() => {
    if (!turno && !winner && count < 9) {
      setTimeout(computerMove, 100);
    }
  }, [turno, winner, count]);

  const resetGame = () => {
    setBoxes(Array(9).fill(""));
    setTurno(firstPlayer === "X");
    setWinner(null);
    setCount(0);
    setIsExploding(false);
    setConfettiKey(Date.now()); // Reset confetti key

    if (firstPlayer === "O") {
      setTimeout(computerMove, 100);
    }
  };

  const playerMove = (index) => {
    if (boxes[index] === "" && turno) {
      const newBoxes = [...boxes];
      newBoxes[index] = "X";
      setBoxes(newBoxes);
      setTurno(false);
      setCount(count + 1);
      checkWinner(newBoxes);
    }
  };

  const computerMove = () => {
    let emptyBoxes = boxes
      .map((box, index) => (box === "" ? index : null))
      .filter((index) => index !== null);

    // Check for a winning move
    for (let pattern of winPatterns) {
      let [p1, p2, p3] = pattern.map((index) => boxes[index]);

      if (
        (p1 === "O" && p2 === "O" && p3 === "") ||
        (p1 === "" && p2 === "O" && p3 === "O") ||
        (p1 === "O" && p2 === "" && p3 === "O")
      ) {
        let winningIndex = pattern.find((index) => boxes[index] === "");
        if (winningIndex !== undefined) {
          makeComputerMove(winningIndex);
          return;
        }
      }
    }

    // Block the player from winning
    for (let pattern of winPatterns) {
      let [p1, p2, p3] = pattern.map((index) => boxes[index]);

      if (
        (p1 === "X" && p2 === "X" && p3 === "") ||
        (p1 === "" && p2 === "X" && p3 === "X") ||
        (p1 === "X" && p2 === "" && p3 === "X")
      ) {
        let blockingIndex = pattern.find((index) => boxes[index] === "");
        if (blockingIndex !== undefined) {
          makeComputerMove(blockingIndex);
          return;
        }
      }
    }

    // If no winning or blocking move, choose a random empty box
    let randomIndex = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    makeComputerMove(randomIndex);
  };

  const makeComputerMove = (index) => {
    if (boxes[index] === "") {
      const newBoxes = [...boxes];
      newBoxes[index] = "O";
      setBoxes(newBoxes);
      setTurno(true);
      setCount(count + 1);
      checkWinner(newBoxes);
    }
  };

  const checkWinner = (boxes) => {
    for (let pattern of winPatterns) {
      let [p1, p2, p3] = pattern.map((index) => boxes[index]);
      if (p1 !== "" && p1 === p2 && p2 === p3) {
        setWinner(p1);
        setFirstPlayer(p1 === "X" ? "X" : "O");
        setIsExploding(true); // Set isExploding to true when there is a winner
        setConfettiKey(Date.now()); // Reset confetti key to force re-render
        return;
      }
    }
  };
  

  return (
    <div className=" text-center min-h-screen flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(${bgImage})` }}>
      {isExploding && <ConfettiExplosion key={confettiKey} />}
      {isDraw && (
        <div>{/* Animation component or CSS animation for draw game */}</div>
      )}
      <div className={`msgContainer ${winner ? "block" : "hidden"} m-4`}>
        <h1 className=" text-2xl relative px-12 py-3 text-white bg-gradient-to-r from-gray-600 to-gray-200 bg-clip-text text-transparent font-semibold  whitespace-nowrap font-poppins">
          {winner === "Draw"
            ? "Game is draw"
            : `Congratulations, Winner is ${winner}`}
        </h1>
        {/* <button
          onClick={resetGame}
          className="newGame elative overflow-hidden border-none w-48 h-12 bg-transparent text-black font-medium text-lg shadow-md rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg"
        >
          New Game
        </button> */}
        <FancyButton onClick={resetGame} image={ticTacToeImage} >
          New Game
          </FancyButton>
      </div>
      <main>
        <h1 className="btn-shine">Tic-Tac-Toe</h1>
        <div className="container h-72 flex justify-center items-center">
          <div className="game grid grid-cols-3 gap-1">
            {boxes.map((box, index) => (
                <button 
                key={index}
                onClick={() => playerMove(index)}
                disabled={box !== "" || winner}
                className="rounded-xl  h-16 w-16 cursor-pointer group block px-5 py-2  bg-black text-white text-4xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
                <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white">
                {box}
                </span>
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={resetGame}
          className="bg-red-600 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Reset Game
        </button>
      </main>
    </div>
  );
};

export default TicTacToe;
