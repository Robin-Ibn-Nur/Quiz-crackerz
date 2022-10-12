import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizOption = () => {
    const quiz = useLoaderData().data;
    
    console.log(quiz.questions);
    
    // const data = quiz.map((date, index) => <div>Quiz Number { index + 1}</div>)
    // console.log(data);
    
    return (
        <div>
            <h1>this is quiz: { }</h1>
        </div>
    );
};

export default QuizOption;