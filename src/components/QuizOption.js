import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from './Quizes';

const QuizOption = () => {
    const quiz = useLoaderData().data;
    
    return (
        <div className='border-4 border-indigo-500/100 bg-zinc-400'>
            <h1 className='text-center text-5xl tracking-wide font-bold'>{quiz.name}</h1>
            {
                quiz.questions.map((data, index) => <Quizes key={data.id} data={data} index={index} />)
            }
        </div>
    );
};

export default QuizOption;