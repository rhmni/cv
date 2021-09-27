import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import Hr from "../Components/UI/Hr";
import ProjectPhoto from '../assets/images/1.jpg'
import {BiShowAlt} from 'react-icons/bi';
import {RiGithubLine} from 'react-icons/ri';

const Projects = props => {
    return (
        <MainLayout>
            <main className='flex flex-col justify-start'>
                <p className='text-lg dark:text-gray-100 text-gray-700 mb-2'>پروژه های من</p>
                <Hr />
                <ul className='flex flex-col justify-center lg:flex-row gap-5 items-center mt-8 mx-auto mb-8'>
                    <li className='shadow-light-inner text-gray-700 dark:shadow-dark-inner dark:text-gray-400 rounded-full'>
                        <button className='px-5 py-2 rounded-full uppercase'>
                            بک اند
                        </button>
                    </li>
                    <li className='transition duration-150 dark:text-gray-400 hover:shadow-light-inner dark:hover:shadow-dark-inner text-gray-700 rounded-full'>
                        <button className='px-5 py-2 rounded-full uppercase'>
                            فرانت اند
                        </button>
                    </li>
                </ul>
                <Hr isCenetr/>
                <div className='flex flex-col mt-10'>
                    <div className='w-full shadow-light-inner dark:shadow-dark-inner p-2 mb-5 rounded-2xl'>
                        <div className='w-full p-1.5 shadow-light-outer dark:shadow-dark-outer rounded-2xl'>
                            <img src={ProjectPhoto} alt="" className='rounded-2xl'/>
                        </div>
                    </div>
                    <h2 className='flex-wrap flex gap-2 mb-2.5'>
                        <span className='text-xl text-gray-700 dark:text-gray-100'>فروشگاه اینترنتی با فریم ورک جنگو </span>
                        <span className='shadow-light-inner dark:shadow-dark-inner text-red py-1 px-4 rounded-full text-sm text-gray-400'>۱ مهر 1400</span>
                    </h2>
                    <div className='flex flex-row flex-wrap gap-4 justify-start'>

                        <p className='flex flex-row items-center gap-1'>
                            <span className='ml-0.5 text-gray-700 dark:text-gray-400'><BiShowAlt size={20}/></span>
                            <span className='text-gray-700 dark:text-gray-400'> مشاهده <a target='_blank' className='text-red' href="">دمو</a></span>
                        </p>

                        <p className='flex flex-row items-center gap-1'>
                            <span className='ml-0.5 text-gray-700 dark:text-gray-400'><RiGithubLine size={20}/></span>
                            <span className='text-gray-700 dark:text-gray-400'> مشاهده در <a target='_blank' className='text-red' href="">گیت هاب</a></span>
                        </p>

                    </div>
                    <div className='w-full h-1.5 my-3 shadow-light-inner dark:shadow-dark-inner rounded-full' />
                    <p className='text-md dark:text-gray-400 text-gray-500 leading-7 mb-8'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                        آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                        ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که
                        تمام و دشواری موجود در ارائه راهکارها
                    </p>
                    <Hr isCenetr/>
                </div>
            </main>
        </MainLayout>
    );
};

export default Projects;