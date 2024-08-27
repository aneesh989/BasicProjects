import React, { useState } from 'react';

const Answers = ({ answers, correct, showButton, isAnswered, increaseScore }) => {
    const [classNames, setClassNames] = useState(['', '', '', '']);

    const checkAnswer = (e) => {
        if (!isAnswered) {
            const elem = e.currentTarget;
            const answer = Number(elem.dataset.id);
            const updatedClassNames = [...classNames];

            if (answer === correct) {
                updatedClassNames[answer - 1] = 'right';
                increaseScore();
            } else {
                updatedClassNames[answer - 1] = 'wrong';
            }

            setClassNames(updatedClassNames);
            showButton();
            console.log(`Answer clicked: ${answer}, Correct answer: ${correct}`);
        }
    };

    return (
        <div id="answers">
            <ul>
                {answers.map((answer, index) => (
                    <li key={index} onClick={checkAnswer} className={classNames[index]} data-id={index + 1}>
                        <span>{String.fromCharCode(65 + index)}</span>
                        <p>{answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Answers;
