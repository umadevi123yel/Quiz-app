import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FinalPage from '../finalPage';
const questions = [
    {
        questionText: 'Which of the following is used in React.js to increase performance?',
        answerOptions: [
            { answerText: 'Original DOM', isCorrect: false },
            { answerText: 'Both A and C', isCorrect: false },
            { answerText: 'Virtual DOM', isCorrect: true },
            { answerText: 'None of the Above', isCorrect: false },
        ],
    },
    {
        questionText: 'What is React JS?',
        answerOptions: [
            { answerText: 'Server-Side Framework', isCorrect: false },
            { answerText: 'User-Interface FrameworK', isCorrect: true },
            { answerText: 'Both A and B', isCorrect: false },
            { answerText: 'None of the Above', isCorrect: false },
        ],
    },
    {
        questionText: 'Identify the one which is used to pass data to components from outside',
        answerOptions: [
            { answerText: 'Props', isCorrect: true },
            { answerText: 'PropTypes', isCorrect: false },
            { answerText: 'setState', isCorrect: false },
            { answerText: 'Render with Aruguments', isCorrect: false },
        ],
    },
    {
        questionText: 'Who Created React JS?',
        answerOptions: [
            { answerText: 'Jorden Mike', isCorrect: false },
            { answerText: 'Jorden Walke', isCorrect: true },
            { answerText: 'Tim Lee', isCorrect: false },
            { answerText: 'Jorden Lee', isCorrect: false },
        ],
    },
    {
        questionText: 'What is Babel?',
        answerOptions: [
            { answerText: 'Javascript Compiler', isCorrect: true },
            { answerText: 'Javascript Interpreter', isCorrect: false },
            { answerText: 'Javascript Transpiler', isCorrect: false },
            { answerText: 'None of the Above', isCorrect: false },
        ],
    },
];
const QuizStart = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };
    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }
    const percentage = Math.round(
((currentQuestion + 1) / questions.length) * 100 );
    return (
        <>
    {showScore ? (<FinalPage score = {score} totalQuestions = {questions.length}/>)
        :(
        <div className="flex flex-col  h-screen w-5/12 mx-auto  border border-width:1px container bg-orange-200">
            <div className="gap-8 columns-3 flex justify-center">
                <p>Fantasy Quiz # {currentQuestion + 1}</p>
            </div>
            <div className="h-4 bg-green-500 rounded-md" style={{ width: `${percentage}%` }}></div>

            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <h4 className="mt-10 text-xl text-black/60">Question {currentQuestion + 1} of {questions.length}</h4>
                <div className="mt-4 text-2xl text-black">
                    {questions[currentQuestion].questionText}
                </div>
            </div>
            {questions[currentQuestion].answerOptions.map((ele) => {
                return (
                    <>
                        <div className="mt-6 space-y-6 flex justify-center" key={ele.answerText}>
                            <div className="flex items-center gap-x-3" >
                                <input id={ele.answerText} name={currentQuestion} type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor={ele.answerText} className="block text-sm font-medium leading-6 text-gray-900" onClick={() => handleAnswerOptionClick(ele.isCorrect)}>{ele.answerText}</label>
                            </div>
                        </div>
                    </>
                )
            })}
            <div className='justify-center flex'>
            <button className="w-[30%] py-3  text-center mt-6 space-y-6 bg-indigo-600 rounded-lg text-white" onClick={() => handleNextQuestion()}>{percentage == 100 ? 'Finish' : 'Continue'}</button>
            </div>
        </div>
         ) 
        } 
        </>
    )
}

export default QuizStart