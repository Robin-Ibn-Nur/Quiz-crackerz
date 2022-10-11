import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link aria-label="Back to homepage" className="flex items-center p-2 text-2xl font-semibold sm:text-4xl">
                    <FontAwesomeIcon className='mx-8' icon={faCode} />

                    Crazy Programmer</Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to='/home'
                            aria-label='Home'
                            title='Home'
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                        >Home</Link>
                    </li>
                    <li className="flex">
                        <Link to='/statistic'
                            aria-label='Statistic'
                            title='Statistic' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Statistic</Link>
                    </li>
                    <li className="flex">
                        <Link to='/about'
                            aria-label='About'
                            title='About' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</Link>
                    </li>
                    <li className="flex">
                        <Link to='/blog'
                            aria-label='Blog'
                            title='Blog' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;