import React, {useEffect} from 'react';
import {RiMoonFill, RiSunFill} from "react-icons/ri";
import {MdTranslate} from "react-icons/md";
import useLang from "../utils/hooks/useLang";
import useTheme from "../utils/hooks/useTheme";


const ThemeLangButton = props => {

    const [lang, setLang] = useLang();

    const [theme, setTheme] = useTheme();

    useEffect(() => {
        if (theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')

        if (lang === 'fa') {
            document.dir = 'rtl';
            document.documentElement.lang = 'fa';
        } else {
            document.dir = 'ltr';
            document.documentElement.lang = 'en';
        }
    })

    const handleLang = () => {
        if (lang === 'en') setLang.dispatch({type: 'setFa'});
        else setLang.dispatch({type: 'setEn'});
    }

    const handleTheme = () => {
        if (theme === 'light') setTheme.dispatch({type: 'setDark'});
        else setTheme.dispatch({type: 'setLight'});
    }

    return (
        <div className='flex flex-row w-32 justify-between fixed top-12 rtl:left-8 ltr:right-8 z-50'>
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
                {theme === 'light' ? <RiMoonFill/> : <RiSunFill/>}
            </button>
            <button
                onClick={handleLang}
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

export default React.memo(ThemeLangButton);