import React from 'react'
import {Link} from 'react-router-dom'
const FinalPage = ({score,totalQuestions}) => {

    return (
        <div className="py-8 flex flex-col py-8 space-y-4  h-96 content-center w-5/12 mx-auto  border border-width:1px container bg-orange-200 place-items-center">
            <h2 className="gap-8 columns-3 flex justify-center">Results of Fantasy Quiz</h2>
            <div>
                <h4 className="gap-8 columns-3 flex justify-center">Score Gained: {score *2}</h4>
                <h4 className="gap-8 columns-3 flex justify-center">Correct Predictions: {score}/{totalQuestions}</h4>
            </div>
             <Link to="/" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded">Close</Link>
        </div>
    )
}

export default FinalPage