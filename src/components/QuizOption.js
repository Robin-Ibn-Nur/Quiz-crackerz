import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizOption = () => {
    const quiz = useLoaderData();
    // const   { questions } = quiz
    
    // for (const questions of quiz) {
    //     console.log(questions)
    // }
    return (
        <div>
            <h1>this is quiz</h1>
        </div>
    );
};

export default QuizOption;