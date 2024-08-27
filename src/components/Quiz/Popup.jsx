import React, { useState, useEffect } from 'react';
const Popup = ({ style, score, total, startQuiz }) => {
    const [time, setTime] = useState('start');
    const [title, setTitle] = useState('Welcome to Quiz');
    const [text, setText] = useState('This is a quiz application built using ReactJS. <br /><br /> Currently it\'s loaded with CSS questions from W3Schools, but you can easily load any type of questions into it. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.');
    const [buttonText, setButtonText] = useState('Start the quiz');
    useEffect(() => {
        setText(`You have completed the quiz. <br /> You got: <strong>${score}</strong> out of <strong>${total}</strong> questions right.`);
    }, [score, total]);
    const popupHandle = () => {
        if (time === 'start') {
            setTime('end');
            setTitle('Congratulations!');
            setButtonText('Restart');
            startQuiz();
        } else {
            window.location.reload();
        }
    };
    return (
        <div className="popup-container" style={style}>
            <div className="container">
                <div className="col-md-8 col-md-offset-2">
                    <div className="popup">
                        <h1>{title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: text }} />
                        <button className="fancy-btn" onClick={popupHandle}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Popup;
