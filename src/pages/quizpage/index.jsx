import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FinalPage from '../finalPage';
const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
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
    {percentage == 100 ? (<FinalPage score = {score} totalQuestions = {questions.length}/>)
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