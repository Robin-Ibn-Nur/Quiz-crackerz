import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizOption = () => {
    const quiz = useLoaderData().data;
    console.log(quiz);
    return (
        <div>
            <h1>this is quiz</h1>
        </div>
    );
};

export default QuizOption;