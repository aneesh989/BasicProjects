import React, { useState, useEffect } from 'react';
import { quizData } from './data.jsx';
import Answers from './Answers';
import Popup from './Popup';
import './quiz.css';
const Quiz = () => {
    const [nr, setNr] = useState(0);
    const [total] = useState(data.length);
    const [showButton, setShowButton] = useState(false);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [displayPopup, setDisplayPopup] = useState('flex');
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [correct, setCorrect] = useState(null);

    useEffect(() => {
        if (nr < total) {
            const currentQuestion = quizData[nr];
            setQuestion(currentQuestion.question);
            setAnswers(currentQuestion.answers);
            setCorrect(currentQuestion.correct);
            console.log(`Question ${nr + 1}: ${currentQuestion.question}`);
        }
    }, [nr, total]);

    const nextQuestion = () => {
        if (nr === total - 1) {
            setDisplayPopup('flex');
        } else {
            setNr(nr + 1);
            setShowButton(false);
            setQuestionAnswered(false);
        }
    };

    const handleShowButton = () => {
        setShowButton(true);
        setQuestionAnswered(true);
    };

    const handleStartQuiz = () => {
        setDisplayPopup('none');
        setNr(0);
    };

    const handleIncreaseScore = () => {
        setScore(score + 1);
    };

    return (
        <div className="container">
            <Popup style={{ display: displayPopup }} score={score} total={total} startQuiz={handleStartQuiz} />

            <div className="row">
                <div className="col-lg-10 col-lg-offset-1">
                    <div id="question">
                        <h4>Question {nr + 1}/{total}</h4>
                        <p>{question}</p>
                    </div>
                    <Answers answers={answers} correct={correct} showButton={handleShowButton} isAnswered={questionAnswered} increaseScore={handleIncreaseScore} />
                    <div id="submit">
                        {showButton ? <button className="fancy-btn" onClick={nextQuestion}>{nr === total - 1 ? 'Finish quiz' : 'Next question'}</button> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
