import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-4xl tracking-tighter font-bold">Programming is Nothing but a passion
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <small>It's Plus sign that we have you. WoW! Use this code to join with us:</small>
                            <small className="font-bold text-lg">GAMBA</small>
                        </div>
                        <Link to='/ErrorPage' className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Join-Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;