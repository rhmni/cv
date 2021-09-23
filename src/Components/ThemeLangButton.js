import React, {useContext, useEffect} from 'react';
import {RiMoonFill, RiSunFill} from "react-icons/ri";
import {MdTranslate} from "react-icons/md";
import {ThemeContext} from "../Context/themeContext";


const ThemeLangButton = props => {

    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (themeContext.theme.theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    })

    const handleTheme = () => {
        if (themeContext.theme.theme === 'light') themeContext.dispatch({type: 'setDark'});
        else themeContext.dispatch({type: 'setLight'});
    }

    return (
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
                <MdTranslate size={27}/>
            </button>
        </div>
    );
};

export default ThemeLangButton;