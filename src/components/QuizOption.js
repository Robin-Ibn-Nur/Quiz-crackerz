import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizOption = () => {
    const quiz = useLoaderData().data;

    console.log(quiz.questions);

    const display = quiz.questions.map((data, index) => console.log(data, index))


    return (
        <div>
            {
                quiz.questions.map((data, index) => <div>Quiz Number {index + 1}</div>)
            }
        </div>
    );
};

export default QuizOption;