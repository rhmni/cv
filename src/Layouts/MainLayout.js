import React, {useEffect} from 'react';
import Header from "../Blocks/Header";
import Footer from "../Blocks/Footer";
import ThemeLangButton from "../Components/ThemeLangButton";
import PropTypes, {arrayOf, element} from "prop-types";
import GoToTop from "../Components/GoToTop"
import useDb from "../utils/hooks/useDb";
import BgAnimation from "../Components/BgAnimation";


const MainLayout = props => {

    const dbData = useDb();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    return (
        <React.Fragment>
            <div className='w-full block lg:hidden h-20 -mt-20 shadow-2xl sticky -top-20' />
            <ThemeLangButton />
            <BgAnimation />
            <div className='bg-body-light dark:bg-dark pt-36'>

                <div
                    className='
                    flex lg:flex-row flex-col gap-4
                    xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-11/12
                    mx-auto
                '
                >
                    <Header/>
                    <div className='flex flex-col w-full gap-8 mb-10 z-40'>
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
                            mx-auto text-center px-6 py-1.5 text-sm ltr:font-en rtl:font-fa
                        '
                        >
                            {dbData.footnote}
                        </div>
                    </div>

                </div>
            </div>
            <GoToTop />
        </React.Fragment>
    );
};

MainLayout.propTypes = {
    children: PropTypes.oneOfType([element, arrayOf(element)]).isRequired,
};

export default MainLayout;