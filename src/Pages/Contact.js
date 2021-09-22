import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import Hr from "../Components/UI/Hr";
import {RiMapPinLine} from 'react-icons/ri';
import {MdLanguage} from 'react-icons/md';
import {IoMailOutline, IoCallOutline} from 'react-icons/io5';

const Contact = () => {
    return (
        <MainLayout>
            <main className='flex flex-col justify-start'>
                <p className='text-lg dark:text-gray-100 text-gray-700 mb-2'>اطلاعات تماس</p>
                <Hr dir='rtl'/>
                <div className='w-full mt-10'>

                    <div className='hidden -mb-12 bg-light bg-blue-600 dark:bg-dark dark:shadow-dark-inner relative md:flex flex-row items-center justify-center text-red w-24 h-24 rounded-full mx-auto shadow-light-inner'>
                        <RiMapPinLine size={45} title='آدرس'/>
                    </div>

                    <div className='hidden w-full rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2 md:block'>
                        <div
                            className='h-52 flex flex-row justify-center items-center w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <p className='text-xl dark:text-gray-100 dark:text-gray-100 text-gray-700'>ایران ، اصفهان ، اصفهان</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row w-full md:gap-5 gap-10 justify-between relative md:-mt-10'>
                        <div className='flex flex-col items-center w-full md:w-1/3 px-2 gap-4'>
                            <div
                                className='bg-light dark:bg-dark dark:shadow-dark-inner flex flex-row w-16 h-16 rounded-full justify-center items-center shadow-light-inner text-red'>
                                <IoMailOutline size={30}/>
                            </div>
                            <div
                                className='cursor-pointer w-full
                                    dark:text-gray-400 dark:shadow-dark-inner dark:bg-dark
                                    shadow-light-inner bg-light rounded-full text-gray-500
                                    mx-auto text-center px-6 py-1.5 text-sm
                                '
                            >
                                ایمیل : im.rhmni@gmail.com
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full md:w-1/3 px-2 gap-4'>
                            <div
                                className='bg-light dark:shadow-dark-inner dark:bg-dark dark:shadow-dark-inner  flex flex-row w-16 h-16 rounded-full justify-center items-center shadow-light-inner text-red'>
                                <IoCallOutline size={30}/>
                            </div>
                            <div
                                className='cursor-pointer w-full
                                    dark:text-gray-400 dark:shadow-dark-inner dark:bg-dark
                                    shadow-light-inner bg-light rounded-full text-gray-500
                                    mx-auto text-center px-6 py-1.5 text-sm
                                '
                            >
                                تماس : 09134437585
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full md:w-1/3 px-2 gap-4'>
                            <div
                                className='bg-light flex flex-row w-16 dark:bg-dark dark:shadow-dark-inner  h-16 rounded-full justify-center items-center shadow-light-inner text-red'>
                                <MdLanguage size={33}/>
                            </div>
                            <div
                                className='cursor-pointer w-full
                                    dark:text-gray-400 dark:shadow-dark-inner dark:bg-dark
                                    shadow-light-inner bg-light rounded-full text-gray-500
                                    mx-auto text-center px-6 py-1.5 text-sm
                                '
                            >
                                سایت : www.rhmni.ir
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </MainLayout>
    );
};

export default Contact;