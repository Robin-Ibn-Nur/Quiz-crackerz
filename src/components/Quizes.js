import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Quizes = ({ data }) => {
    console.log(data)
    const { options, question, correctAnswer } = data

    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">{question}</h1>
                </div>
                <FontAwesomeIcon className='hover:cursor-pointer' icon={faEye}>{correctAnswer}</FontAwesomeIcon>
            </div>
            <section className="py-6 dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <button>{options[0]}</button>
                        <button>{options[1]}</button>
                        <button>{options[2]}</button>
                        <button>{options[3]}</button>
                        
                    </div>
                </div>
            </section>
        </div>



    );
};

export default Quizes;
