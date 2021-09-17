import React, {useContext, useEffect} from 'react';
import {ThemeContext} from "../Context/themeContext";
import {RiMoonFill, RiSunFill} from "react-icons/ri";


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
                    <p>
                        {
                            themeContext.theme.theme === 'light' ?
                                <RiMoonFill/> : <RiSunFill/>
                        }
                    </p>
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
                    <p>
                        {
                            themeContext.theme.theme === 'light' ?
                                'Fa' : 'En'
                        }
                    </p>
                </button>
            </div>
            {
                props.children
            }
        </div>
    )
        ;
};

export default MainLayout;