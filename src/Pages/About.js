import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import Hr from "../Components/UI/Hr";
import {VscChromeClose} from "react-icons/vsc";
import {AiOutlineCalendar} from "react-icons/ai";
import {GiRibbonMedal} from "react-icons/gi";
import {FcCheckmark} from "react-icons/fc";
import ProgressBar from "../Components/UI/ProgressBar";
import PersonalData from "../Data/cvData/MainData.json";

const About = props => {

    const personalData = PersonalData

    return (
        <MainLayout>
            <main className='flex flex-col justify-start'>
                <p className='text-lg dark:text-gray-100 text-gray-700 mb-2'>درباره من</p>
                <Hr />
                <h1 className='text-4xl dark:text-gray-100 text-gray-700 mt-8'>{personalData.name}</h1>
                <h3 className='mt-2.5 text-lg dark:text-gray-400 text-gray-500'>
                    {personalData.subName}
                </h3>
                {
                    personalData.descriptions.map((paragraph, index) => (
                        <p className={`${index === 0 ? 'mt-6' : 'mt-2'} text-md dark:text-gray-400 text-gray-500 leading-7`}>{paragraph}</p>
                    ))
                }
                <div className='flex flex-col lg:flex-row mt-6 gap-5 lg:mx-2 justify-center'>
                    <div className='w-full lg:w-1/2 rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2'>
                        <div className='w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <ul className='p-3'>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>نام</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{personalData.name}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>سن</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{personalData.age}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>ساکن</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{personalData.address}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2'>
                        <div className='w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <ul className='p-3'>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>ایمیل</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{personalData.email}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>تلفن</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{personalData.phone}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>دورکاری</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400 flex flex-row justify-center'
                                    >
                                        {
                                            personalData.isRemote ? <i><FcCheckmark size={25}/></i> : <i className='text-red'><VscChromeClose size={25}/></i>
                                        }
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <p className='text-lg dark:text-gray-100 text-gray-700 mt-12 mb-2'>مهارتها</p>
                        <Hr />
                        <div className='flex flex-col gap-6 lg:gap-0 items-center lg:flex-row mt-8'>
                            <div className='flex flex-col lg:w-10/12 w-11/12'>
                                <ProgressBar name='react' width={50}/>
                                <ProgressBar name='react' width={5}/>
                                <ProgressBar name='react' width={10}/>
                                <ProgressBar name='react' width={85}/>
                                <ProgressBar name='react' width={35}/>
                            </div>
                            <div className='flex flex-row justify-start items-center lg:w-2/12 w-full'>
                                <p
                                    className='
                                        uppercase lg:w-80 w-full text-red text-center
                                        dark:shadow-dark-outer shadow-light-outer lg:dark:shadow-dark-inner lg:shadow-light-inner
                                        py-2.5 px-2 rounded-full
                                        lg:transform lg:rtl:-rotate-90 lg:ltr:rotate-90
                                    '
                                >
                                    front
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-lg dark:text-gray-100 text-gray-700 mt-10'>تجربیات</p>
                <Hr />
                <div className='flex flex-row mt-4'>
                    <div className='w-11/12 mt-5'>
                        <div className='flex gap-10 flex-col w-full'>

                            <div className='flex flex-row gap-4 lg:gap-0'>
                                <div className='w-1/12'>
                                    <div className='w-2.5 h-2.5 mt-1.5 mx-auto bg-red rounded-full'/>
                                </div>
                                <div className='w-11/12'>
                                    <p className='flex-wrap flex gap-2 mb-1.5'>
                                        <span className='text-md dark:text-gray-100 text-gray-700'>مدرک کارشناسی نرم افزار</span>
                                        <span
                                            className='shadow-light-inner dark:shadow-dark-inner text-red py-1 px-4 rounded-full text-xs text-gray-400'>1 سال و ۴ ماه</span>
                                    </p>
                                    <p className='flex flex-row items-center text-gray-500 text-sm dark:text-gray-400 w-full'>
                                        <span className='ltr:mr-3.5 rtl:ml-3.5 text-lg'>
                                            <AiOutlineCalendar size={22}/>
                                        </span>
                                        <span>مهر 1399 - مهر 1400</span>
                                    </p>
                                    <p className='mt-3 text-md dark:text-gray-400 text-gray-500 leading-7'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها
                                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و
                                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
                                        درصد گذشته حال و
                                        آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                        برای طراحان رایانه
                                        ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می
                                        توان امید داشت که
                                        تمام و دشواری موجود در ارائه راهکارها
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 lg:gap-0'>
                                <div className='w-1/12'>
                                    <div className='w-2.5 h-2.5 mt-1.5 mx-auto bg-red rounded-full'/>
                                </div>
                                <div className='w-11/12'>
                                    <p className='flex-wrap flex gap-2 mb-1.5'>
                                        <span className='text-md dark:text-gray-100 text-gray-700'>مدرک کارشناسی نرم افزار</span>
                                        <span
                                            className='shadow-light-inner dark:shadow-dark-inner text-red py-1 px-4 rounded-full text-xs text-gray-400'>1 سال و ۴ ماه</span>
                                    </p>
                                    <p className='flex flex-row items-center text-gray-500 text-sm dark:text-gray-400 w-full'>
                                        <span className='ltr:mr-3.5 rtl:ml-3.5 text-lg'>
                                            <AiOutlineCalendar size={22}/>
                                        </span>
                                        <span>مهر 1399 - مهر 1400</span>
                                    </p>
                                    <p className='mt-3 text-md dark:text-gray-400 text-gray-500 leading-7'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است چاپگرها
                                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و
                                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
                                        درصد گذشته حال و
                                        آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                        برای طراحان رایانه
                                        ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می
                                        توان امید داشت که
                                        تمام و دشواری موجود در ارائه راهکارها
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <p className='text-lg dark:text-gray-100 text-gray-700 mt-10'>مدارک</p>
                <Hr />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
                    <a href="" target='_blank'>
                        <div className='w-full shadow-light-inner dark:shadow-dark-inner p-2 rounded-2xl'>
                            <div className='flex flex-row gap-5 w-full shadow-light-outer dark:shadow-dark-outer rounded-2xl p-5 items-center'>
                                <div className='flex-shrink-0 w-24 h-24 text-red hidden sm:flex justify-center items-center rounded-full shadow-light-inner dark:shadow-dark-inner'>
                                    <GiRibbonMedal size={45}/>
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='text-gray-700 text-md mb-0.5 dark:text-gray-100'>آموزش پایتون از کورسرا</h3>
                                    <p className='text-sm text-gray-500 dark:text-gray-400 mb-0.5'>سریال مدرک : 3456</p>
                                    <p className='text-xs text-gray-400 dark:text-gray-500'>27 خرداد 1400</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </main>
        </MainLayout>
    );
};

export default About;