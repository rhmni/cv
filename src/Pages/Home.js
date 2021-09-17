import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import ProfileImage from '../assets/profile.jpg'
import {
    RiPhoneLine,
    RiCameraLine,
    RiUser3Line,
    RiHome2Line,
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
            <div className='
                flex lg:flex-row flex-col gap-4
                xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm w-11/12
                mx-auto
                '
            >
                <div
                    className='flex flex-col items-center px-8 pt-14 pb-16 lg:mb-14 xl:w-96 lg:w-72 w-full bg-light dark:bg-dark shadow-light-outer dark:shadow-dark-outer rounded-3xl'
                >
                    <div className='mb-8 w-52 shadow-light-inner p-2 rounded-full'>
                        <div className='shadow-light-outer p-2 rounded-full'>
                            <img src={ProfileImage} alt="" className='rounded-full'/>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-center text-3xl mb-2'>علی رحمانی</h2>
                        <h5 className='text-center text-gray-400 text-lg'>Full Stack Developer</h5>
                    </div>
                    <ul className='flex flex-col gap-4 w-full items-center'>
                        <li className='w-full'>
                            <button className='flex flex-row justify-between items-center w-full px-5 py-2 shadow-light-inner rounded-full hover:shadow-light-inner transition duration-300'>
                                <span>صفحه اصلی</span>
                                <i className='text-red'><RiHome2Line size={27}/></i>
                            </button>
                        </li>
                        <li className='w-full'>
                            <button className='flex flex-row justify-between items-center w-full px-5 py-2 shadow-light-outer rounded-full hover:shadow-light-inner transition duration-300'>
                                <span>درباره من</span>
                                <i className='text-red'><RiUser3Line size={27}/></i>
                            </button>
                        </li>
                        <li className='w-full'>
                            <button className='flex flex-row justify-between items-center w-full px-5 py-2 shadow-light-outer rounded-full hover:shadow-light-inner transition duration-300'>
                                <span>پروژه ها</span>
                                <i className='text-red'><RiCameraLine size={27}/></i>
                            </button>
                        </li>
                        <li className='w-full'>
                            <button className='flex flex-row justify-between items-center w-full px-5 py-2 shadow-light-outer rounded-full hover:shadow-light-inner transition duration-300'>
                                <span>ارتباط با من</span>
                                <i className='text-red'><RiPhoneLine size={27}/></i>
                            </button>
                        </li>

                    </ul>
                </div>


                <div className='flex flex-col w-full gap-8'>
                    <div
                        className='shadow-light-outer dark:shadow-dark-outer bg-light dark:bg-dark rounded-3xl p-12 flex flex-col'>
                        <div className='flex flex-col items-center my-16'>
                            <h1 className='text-4xl'>علی رحمانی</h1>
                            <h3 className='mt-3.5'>Full Stack Developer</h3>
                            <ul className='flex flex-row mt-5 gap-2'>
                                <li
                                    title='لینکدین'
                                    className='
                                    flex flex-row items-center justify-center
                                    rounded-full w-10 h-10 text-gray-500 cursor-pointer
                                    shadow-light-outer hover:shadow-light-inner hover:text-red
                                    transition duration-300
                                    '
                                >
                                    <RiLinkedinLine size={20}/>
                                </li>
                                <li
                                    title='گیت هاب'
                                    className='
                                    flex flex-row items-center justify-center
                                    rounded-full w-10 h-10 text-gray-500 cursor-pointer
                                    shadow-light-outer hover:shadow-light-inner hover:text-red
                                    transition duration-300
                                    '
                                >
                                    <RiGithubLine size={20}/>
                                </li>
                                <li
                                    title='اینستاگرام'
                                    className='
                                    flex flex-row items-center justify-center
                                    rounded-full w-10 h-10 text-gray-500 cursor-pointer
                                    shadow-light-outer hover:shadow-light-inner hover:text-red
                                    transition duration-300
                                    '
                                >
                                    <RiInstagramLine size={20}/>
                                </li>
                                <li
                                    title='جمیل'
                                    className='
                                    flex flex-row items-center justify-center
                                    rounded-full w-10 h-10 text-gray-500 cursor-pointer
                                    shadow-light-outer hover:shadow-light-inner hover:text-red
                                    transition duration-300
                                    '
                                >
                                    <RiGoogleLine size={20}/>
                                </li>
                            </ul>
                        </div>
                        <div
                            className=' flex flex-row justify-center items-center py-0.5 shadow-light-inner dark:shadow-dark-inner rounded-full w-16 h-2 mx-auto'>
                            <div className='bg-red h-1 w-1/2 rounded-full'></div>
                        </div>
                        <div className='flex flex-row flex-wrap justify-between mt-14 gap-5'>
                            <div className='flex flex-row'>
                                <div
                                    className='flex items-center cursor-pointer text-gray-500 gap-3'
                                >
                                    <span
                                        className='
                                        flex flex-row items-center justify-center
                                    rounded-full w-14 h-14 cursor-pointer text-red
                                    shadow-light-outer hover:shadow-light-inner
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
                                    className='flex items-center cursor-pointer text-gray-500 gap-3'
                                >
                                    <span
                                        className='
                                    flex flex-row items-center justify-center
                                    rounded-full w-14 h-14 cursor-pointer text-red
                                    shadow-light-outer hover:shadow-light-inner
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
                    <div
                        className='shadow-light-inner dark:shadow-dark-inner bg-light dark:bg-dark rounded-full mx-auto text-center px-6 py-1.5 text-sm'>
                        main srg dfgb main srg dfgh fh
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Home;