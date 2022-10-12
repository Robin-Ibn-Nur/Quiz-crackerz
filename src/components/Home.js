import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { QuizContext } from './Root';

const Home = () => {
    const quizes = useContext(QuizContext)

    return (



        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                        <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {quizes.map(quiz => (<Cart key={quiz.id} quiz={quiz} />))}
                    
                   
                </div>
            </div>
        </section>






        // <>
        //     <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
        //         <div className="container mx-auto">
        //             <div className="flex flex-col lg:flex-row items-center justify-between">
        //                 <h2 className="text-center text-4xl tracking-tighter font-bold">Programming is Nothing but a passion
        //                 </h2>
        //                 <div className="space-x-2 text-center py-2 lg:py-0">
        //                     <small>It's Plus sign that we have you. WoW! Use this code to join with us:</small>
        //                     <small className="font-bold text-lg">GAMBA</small>
        //                 </div>
        //                 <Link to='/ErrorPage' className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Join-Now</Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        //         <div className='flex justify-around md:grid grid-cols-2'>
        //             {quizes.map(quiz => (<Cart key={quiz.id} quiz={quiz} />))}
        //         </div>
        //     </div>
        // </>
    );
};

export default Home;

