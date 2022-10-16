import React from 'react';
import { Link } from 'react-router-dom';


const Cart = ({ quiz }) => {
    const {id, name, total, logo } = quiz;

    return (

        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
            <img src={logo} alt="" role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Quiz Name: {name}</h3>
                <span className="text-2xl font-semibold dark:text-gray-400">Total Quiz: {total}</span>
                <p>It doesn't matter if you're a beginning programmer, still in high school, or well into your career in development. Now is a great time to get into competitive programming. But just what is it, and how do you get started?</p>
            </div>
            <div className="flex justify-center">
                <Link to={`/quiz/${id}`}
                    type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Click</Link>
            </div>
        </div>

    );
};

export default Cart;