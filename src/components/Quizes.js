import React from 'react';

const Quizes = ({ data }) => {
    console.log(data)
    const { options, question, correctAnswer } = data

    return (
        // <div className='flex flex-col space-y-4 text-center border-double border-4 border-sky-500'>
        //     <h1 className=''>{question}</h1>
        //     <input type="button" value="" />
        //     <div className='grid grid-cols-2 h-auto space-x-4  '>
                // <button>{options[0]}</button>
                // <button>{options[1]}</button>
                // <button>{options[2]}</button>
                // <button>{options[3]}</button>

        //     </div>

        // </div>


        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">{question}</h1>
                </div>
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
