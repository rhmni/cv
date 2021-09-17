import React from 'react';
import {ThemeContext} from "../Context/themeContext";
import {useContext, useEffect} from "react";
const Wellcome = () => {
    const themeContext = useContext(ThemeContext)
    const handleTheme = () => {
        if (themeContext.theme.theme === 'light') themeContext.dispatch({type: 'setDark'});
        else themeContext.dispatch({type: 'setLight'});
    }


    useEffect(() => {
        console.log(themeContext.theme.theme)
        if (themeContext.theme.theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    })

    return (
        <div className='bg-body-light pt-40'>
            <button
                onClick={handleTheme}
                className='flex flex-row justify-center items-center text-2xl p-5 shadow-light-outer rounded-2xl fixed top-16 left-0 hover:shadow-light-inner transition duration-300'>
                <p>L</p>
            </button>
            <div
                className='
                flex lg:flex-row flex-col gap-4
                xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-11/12
                mx-auto
                '
            >
                <div className='xl:w-96 lg:w-72 w-full bg-light shadow-light-outer rounded-3xl'>
                    1
                </div>

                <div className='flex flex-col w-full gap-8'>
                    <div className='shadow-light-outer dark:bg-blue-600 bg-light rounded-3xl p-12 flex flex-col'>
                        <div className='flex flex-col items-center my-16'>
                            <h1 className='text-4xl'>علی رحمانی</h1>
                            <h3 className='mt-3.5'>Full Stack Developer</h3>
                            <ul className='flex flex-row mt-5 gap-6'>
                                <li>i</li>
                                <li>i</li>
                                <li>i</li>
                                <li>i</li>
                                <li>i</li>
                                <li>i</li>
                            </ul>
                        </div>
                        <div
                            className=' flex flex-row justify-center items-center py-0.5 shadow-light-inner rounded-full w-16 h-2 mx-auto'>
                            <div className='bg-red h-1 w-1/2 rounded-full'></div>
                        </div>
                        <div className='flex flex-row justify-between mt-14'>
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </div>
                    <div
                        className='shadow-light-inner bg-light rounded-full mx-auto text-center px-6 py-1.5 text-sm'>
                        main srg dfgb main srg dfgh fh
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Wellcome;