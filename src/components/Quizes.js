import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';


const Quizes = ({ data, index }) => {
    const { question, correctAnswer } = data

    const clickMe = (e) => {
        toast.dark(e, { autoClose: 500 })
    }

    const handle = (e, b) => {


        if (e === b) {
            toast.success('WonderFull!: Correct Answer!', { autoClose: 500 })
        } else {
            toast.error('Sorry!: Wrong answer!', { autoClose: 500 })
        }

    }

    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-bold pb-6 sm:w-4/6 w-5/6 mx-auto">Question No: {index} - {question}</h1>
                </div>
                <FontAwesomeIcon onClick={() => clickMe(correctAnswer)}
                    className='hover:cursor-pointer' icon={faEye}></FontAwesomeIcon>
            </div>
            <section className="py-6 dark:bg-gray-800 text-white">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">

                        {
                            data.options.map((option, index) => <button key={index}
                                onClick={() => handle(option, correctAnswer)}
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
