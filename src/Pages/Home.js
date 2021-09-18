import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import SocialLink from "../Components/SocialLink";
import Hr from "../Components/UI/Hr";
import {
    RiGithubLine,
    RiLinkedinLine,
    RiInstagramLine,
    RiGoogleLine,
    RiDownloadLine,
    RiPrinterLine
} from "react-icons/ri";


const Home = props => {

    return (
        <MainLayout>
            <div
                className='shadow-light-outer dark:shadow-dark-outer bg-light dark:bg-dark rounded-3xl p-12 flex flex-col'>
                <div className='flex flex-col items-center my-16'>
                    <h1 className='text-5xl dark:text-gray-100 text-gray-700 text-center leading-tight'>
                        علی رحمانی
                    </h1>
                    <h3 className='mt-3.5 text-lg dark:text-gray-400 text-gray-500 text-center'>
                        Full Stack Developer
                    </h3>
                    <ul className='flex flex-row flex-wrap justify-center mt-5 gap-2'>
                        <SocialLink link='https://www.linkedin.com/in/rhmni/' title='لینکدین'>
                            <RiLinkedinLine size={20}/>
                        </SocialLink>
                        <SocialLink link='https://www.github.com/rhmni/' title='گیت هاب'>
                            <RiGithubLine size={20}/>
                        </SocialLink>
                        <SocialLink link='https://www.instagram.com/im.rhmni/' title='اینستاگرام'>
                            <RiInstagramLine size={20}/>
                        </SocialLink>
                        <SocialLink link='mailto:im.rhmni@gmail.com' title='ایمیل'>
                            <RiGoogleLine size={20}/>
                        </SocialLink>
                    </ul>
                </div>
                <Hr dir={'center'}/>
                <div className='flex flex-row flex-wrap justify-between mt-14 gap-3'>
                    <div className='flex flex-row'>
                        <div
                            className='flex items-center cursor-pointer text-gray-500 dark:text-gray-400 gap-3'
                        >
                                    <span
                                        className='
                                            flex flex-row items-center justify-center
                                            rounded-full w-14 h-14 cursor-pointer text-red
                                            shadow-light-outer hover:shadow-light-inner
                                            dark:shadow-dark-outer dark:hover:shadow-dark-inner
                                            transition duration-300
                                        '
                                    >
                                        <RiPrinterLine size={25}/>
                                    </span>
                            <span>پرینت رزومه من</span>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div
                            className='flex items-center cursor-pointer text-gray-500 dark:text-gray-400 gap-3'
                        >
                                    <span
                                        className='
                                            flex flex-row items-center justify-center
                                            rounded-full w-14 h-14 cursor-pointer text-red
                                            shadow-light-outer hover:shadow-light-inner
                                            dark:shadow-dark-outer dark:hover:shadow-dark-inner
                                            transition duration-300
                                        '
                                    >
                                        <RiDownloadLine size={25}/>
                                    </span>
                            <span>دانلود رزومه من</span>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;