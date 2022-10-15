import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Quizes = ({ data, index }) => {
    const { options, question, correctAnswer } = data

    // console.log(data);
    // data.options.map(option=>console.log(option))


    // question.options.map(option => { })
    // onClick = {() => handle()}

    const handleAddToCart = (index) => {
        const result = index;
        console.log(result)
        if (result === correctAnswer) {
            // console.log(result,index)
            // alert('correct')
        } else {
            // console.log(result,index)
            // alert('wrong')
        }
        // toast.info('Info: Product Added!', { autoClose: 500 })
    }

    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-bold pb-6 sm:w-4/6 w-5/6 mx-auto">Question No: {index} - {question}</h1>
                </div>
                <FontAwesomeIcon className='hover:cursor-pointer' icon={faEye}></FontAwesomeIcon>
            </div>
            <section className="py-6 dark:bg-gray-800 text-white">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        
                        {
                            data.options.map(option =>  <button
                                onClick={()=>handleAddToCart(index,{correctAnswer})}
                                className='bg-indigo-500 rounded-lg hover:bg-amber-500 p-5'
                            >{option}</button>)
                        }
                        
                    </div>
                </div>
            </section>
        </div>



    );
};

export default Quizes;
