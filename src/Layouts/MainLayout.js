import React, {useContext, useEffect} from 'react';
import {ThemeContext} from "../Context/themeContext";
import {RiMoonFill, RiSunFill} from "react-icons/ri";
import {MdLanguage} from "react-icons/md";
import Header from "../Blocks/Header";
import Footer from "../Blocks/Footer";


const MainLayout = props => {
    const themeContext = useContext(ThemeContext);

    const handleTheme = () => {
        if (themeContext.theme.theme === 'light') themeContext.dispatch({type: 'setDark'});
        else themeContext.dispatch({type: 'setLight'});
    }

    useEffect(() => {
        if (themeContext.theme.theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    })

    return (
        <React.Fragment>
        <div className='w-full block lg:hidden h-20 -mt-20 shadow-2xl sticky -top-20'/>
        <div className='bg-body-light dark:bg-dark pt-36'>
            <div className='flex flex-row w-32 justify-between fixed top-12 left-8'>
                <button
                    onClick={handleTheme}
                    className='
                        flex flex-row justify-center items-center
                        bg-light shadow-light-outer hover:shadow-light-inner
                        dark:text-gray-100 dark:shadow-dark-outer dark:hover:shadow-dark-inner dark:bg-dark
                        text-2xl w-14 h-14 rounded-2xl text-gray-700
                        transition duration-300
                    '
                >
                    {themeContext.theme.theme === 'light' ? <RiMoonFill/> : <RiSunFill/>}
                </button>
                <button
                    className='
                        flex flex-row justify-center items-center
                        bg-light shadow-light-outer hover:shadow-light-inner
                        dark:text-gray-100 dark:shadow-dark-outer dark:hover:shadow-dark-inner dark:bg-dark
                        text-2xl w-14 h-14 rounded-2xl text-gray-700
                        transition duration-300
                    '
                >
                    <MdLanguage size={28}/>
                </button>
            </div>
            <div
                className='
                    flex lg:flex-row flex-col gap-4
                    xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-11/12
                    mx-auto
                '
            >
                <Header/>
                <div className='flex flex-col w-full gap-8 mb-10'>
                    <div
                        className='
                            flex flex-col
                            shadow-light-outer bg-light
                            dark:shadow-dark-outer dark:bg-dark
                            rounded-3xl lg:p-12 p-9
                        '
                    >

                        {props.children}
                        <Footer/>
                    </div>

                    <div
                        className='
                            dark:text-gray-400 dark:shadow-dark-inner dark:bg-dark
                            shadow-light-inner bg-light rounded-full text-gray-600
                            mx-auto text-center px-6 py-1.5 text-sm
                        '
                    >
                        پانویس
                    </div>
                </div>

            </div>
        </div>
        </React.Fragment>
    );
};

export default MainLayout;