import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import Hr from "../Components/UI/Hr";
import {FcCheckmark} from "react-icons/fc";
import ProgressBar from "../Components/ProgressBar";

const About = props => {
    return (
        <MainLayout>
            <main className='flex flex-col justify-start'>
                <p className='text-lg dark:text-gray-100 text-gray-700 mb-2'>درباره من</p>
                <Hr dir='rtl'/>
                <h1 className='text-4xl dark:text-gray-100 text-gray-700 mt-8'>علی رحمانی</h1>
                <h3 className='mt-2.5 text-lg dark:text-gray-400 text-gray-500'>
                    برنامه نویس فرانت اند
                </h3>
                <p className='mt-6 text-md dark:text-gray-400 text-gray-500 leading-7'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها
                </p>
                <div className='flex flex-col lg:flex-row mt-6 gap-5 lg:mx-2 justify-center'>
                    <div className='w-full lg:w-1/2 rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2'>
                        <div className='w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <ul className='p-3'>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:border-l dark:border-gray-600 dark:text-gray-100'>نام</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>علی رحمانی</span>
                                </li>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:border-l dark:border-gray-600 dark:text-gray-100'>سن</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>19</span>
                                </li>
                                <li className='flex flex-col lg:flex-row justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:border-l dark:border-gray-600 dark:text-gray-100'>ساکن</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>ایران ، اصفهان</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2'>
                        <div className='w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <ul className='p-3'>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:border-l dark:border-gray-600 dark:text-gray-100'>ایمیل</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>im.rhmni@gmail.com</span>
                                </li>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:border-l dark:border-gray-600 dark:text-gray-100'>تلفن</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>09134437585</span>
                                </li>
                                <li className='flex flex-col lg:flex-row justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:border-l dark:border-gray-600 dark:text-gray-100'>دورکاری</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400 flex flex-row justify-center'><FcCheckmark
                                        size={25}/></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex- flex-row'>
                    <div className='flex flex-col'>
                        <p className='text-lg dark:text-gray-100 text-gray-700 mt-12 mb-2'>درباره من</p>
                        <Hr dir='rtl'/>
                        <div className='flex flex-col gap-6 lg:gap-0 items-center lg:flex-row mt-8'>
                            <div className='flex flex-col lg:w-10/12 w-11/12'>
                                <ProgressBar name='react' width={50}/>
                                <ProgressBar name='react' width={5}/>
                                <ProgressBar name='react' width={10}/>
                                <ProgressBar name='react' width={85}/>
                                <ProgressBar name='react' width={35}/>
                            </div>
                            <div className='flex flex-row justify-start items-center lg:w-2/12 w-full'>
                                <p className='uppercase lg:w-80 w-full text-red text-center dark:shadow-dark-outer shadow-light-outer lg:dark:shadow-dark-inner lg:shadow-light-inner py-2.5 px-2 rounded-full lg:transform lg:-rotate-90'>
                                    front
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
};

export default About;