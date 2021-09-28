import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import Hr from "../Components/UI/Hr";
import {VscChromeClose} from "react-icons/vsc";
import {AiOutlineCalendar} from "react-icons/ai";
import {GiRibbonMedal} from "react-icons/gi";
import {FcCheckmark} from "react-icons/fc";
import ProgressBar from "../Components/UI/ProgressBar";
import useTranslate from "../utils/hooks/useTranslate";
import useDb from "../utils/hooks/useDb";

const About = props => {

    const dbData = useDb();
    const translateData = useTranslate();

    return (
        <MainLayout>
            <main className='flex flex-col justify-start'>
                <p className='text-lg dark:text-gray-100 text-gray-700 mb-2'>{translateData.aboutMe}</p>
                <Hr/>
                <h1 className='text-4xl dark:text-gray-100 text-gray-700 mt-8'>{dbData.name}</h1>
                <h3 className='mt-2.5 text-lg dark:text-gray-400 text-gray-500'>
                    {dbData.subTitle}
                </h3>
                {
                    dbData.bio.map((paragraph, index) => (
                        <p key={index}
                           className={`${index === 0 ? 'mt-6' : 'mt-2'} text-md dark:text-gray-400 text-gray-500 leading-7`}>{paragraph}</p>
                    ))
                }
                <div className='flex flex-col lg:flex-row mt-6 gap-5 lg:mx-2 justify-center'>
                    <div className='w-full lg:w-1/2 rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2'>
                        <div className='w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <ul className='p-3'>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>{translateData.charts.name}</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{dbData.name}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>{translateData.charts.age}</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{dbData.age}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>{translateData.charts.city}</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{dbData.city}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2'>
                        <div className='w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <ul className='p-3'>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>{translateData.charts.email}</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{dbData.email}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row lg:border-b dark:border-gray-600 justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>{translateData.charts.phone}</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400'>{dbData.phone}</span>
                                </li>
                                <li className='flex flex-col lg:flex-row justify-between'>
                                    <span
                                        className='w-full lg:w-1/3 text-center text-gray-700 py-2.5 pb-0 lg:rtl:border-l lg:ltr:border-r dark:border-gray-600 dark:text-gray-100'>{translateData.charts.remote}</span>
                                    <span
                                        className='w-full lg:w-2/3 text-center text-gray-500 py-2.5 dark:text-gray-400 flex flex-row justify-center'
                                    >
                                        {
                                            dbData.isRemote ? <i><FcCheckmark size={25}/></i> :
                                                <i className='text-red'><VscChromeClose size={25}/></i>
                                        }
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <p className='text-lg dark:text-gray-100 text-gray-700 mt-12 mb-2'>{translateData.skills}</p>
                        <Hr/>
                        {
                            dbData.skillContainers.map((skillContainer, index) => (
                                <div key={index} className='flex flex-col gap-6 lg:gap-0 items-center lg:flex-row mt-8'>
                                    <div className='flex flex-col lg:w-10/12 w-11/12'>
                                        {
                                            skillContainer.skills.map((skill, index) => (
                                                <ProgressBar key={index} name={skill.name} width={skill.percent}/>
                                            ))
                                        }
                                    </div>
                                    <div className='flex flex-row justify-start items-center lg:w-2/12 w-full'>
                                        <p
                                            className={`
                                                uppercase lg:w-80 w-full text-center ${skillContainer.color === 'red' ? 'text-red' : `text-${skillContainer.color}-600`}
                                                dark:shadow-dark-outer shadow-light-outer lg:dark:shadow-dark-inner lg:shadow-light-inner
                                                py-2.5 px-2 rounded-full
                                                lg:transform lg:rtl:-rotate-90 lg:ltr:rotate-90
                                            `}
                                        >
                                            {skillContainer.name}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p className='text-lg dark:text-gray-100 text-gray-700 mt-10'>{translateData.experience}</p>
                <Hr/>
                <div className='flex flex-row mt-4'>
                    <div className='w-11/12 mt-5'>
                        <div className='flex gap-10 flex-col w-full'>
                            {
                                dbData.experiencies.map((experience, index) => (
                                    <div key={index} className='flex flex-row gap-4 lg:gap-0'>
                                        <div className='w-1/12'>
                                            <div className='w-2.5 h-2.5 mt-1.5 mx-auto bg-red rounded-full'/>
                                        </div>
                                        <div className='w-11/12'>
                                            <p className='flex-wrap flex gap-2 mb-1.5'>
                                                {
                                                    experience.link === '' ?
                                                        <span className='text-md dark:text-gray-100 text-gray-700'>
                                                            {experience.title}
                                                        </span>
                                                        :
                                                        <a href={experience.link}
                                                           className='text-md dark:text-gray-100 text-gray-700'
                                                        >
                                                            {experience.title}
                                                        </a>

                                                }
                                                <span
                                                    className='shadow-light-inner dark:shadow-dark-inner text-red py-1 px-4 rounded-full text-xs text-gray-400'>
                                                    {experience.periodOfTime}
                                                </span>
                                            </p>
                                            <p className='flex flex-row items-center text-gray-500 text-sm dark:text-gray-400 w-full'>
                                                <span className='ltr:mr-2.5 rtl:ml-2.5 text-lg'>
                                                    <AiOutlineCalendar size={22}/>
                                                </span>
                                                <span>{experience.date}</span>
                                            </p>
                                            {
                                                experience.descriptions.map((paragraph, index) => (
                                                    <p key={index}
                                                       className={`${index === 0 ? 'mt-3' : 'mt-2'} text-md dark:text-gray-400 text-gray-500 leading-7`}>{paragraph}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <p className='text-lg dark:text-gray-100 text-gray-700 mt-10'>{translateData.education}</p>
                <Hr/>
                <div className='flex flex-row mt-4'>
                    <div className='w-11/12 mt-5'>
                        <div className='flex gap-10 flex-col w-full'>
                            {
                                dbData.educations.map((education, index) => (
                                    <div key={index} className='flex flex-row gap-4 lg:gap-0'>
                                        <div className='w-1/12'>
                                            <div className='w-2.5 h-2.5 mt-1.5 mx-auto bg-red rounded-full'/>
                                        </div>
                                        <div className='w-11/12'>
                                            <p className='flex-wrap flex gap-2 mb-1.5'>
                                                {
                                                    education.link === '' ?
                                                        <span className='text-md dark:text-gray-100 text-gray-700'>
                                                            {education.title}
                                                        </span>
                                                        :
                                                        <a href={education.link}
                                                           className='text-md dark:text-gray-100 text-gray-700'
                                                        >
                                                            {education.title}
                                                        </a>
                                                }
                                                <span
                                                    className='shadow-light-inner dark:shadow-dark-inner text-red py-1 px-4 rounded-full text-xs text-gray-400'>
                                                    {education.periodOfTime}
                                                </span>
                                            </p>
                                            <p className='flex flex-row items-center text-gray-500 text-sm dark:text-gray-400 w-full'>
                                                <span className='ltr:mr-2.5 rtl:ml-2.5 text-lg'>
                                                    <AiOutlineCalendar size={22}/>
                                                </span>
                                                <span>{education.date}</span>
                                            </p>
                                            {
                                                education.descriptions.map((paragraph, index) => (
                                                    <p key={index}
                                                       className={`${index === 0 ? 'mt-3' : 'mt-2'} text-md dark:text-gray-400 text-gray-500 leading-7`}>{paragraph}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <p className='text-lg dark:text-gray-100 text-gray-700 mt-10'>{translateData.certificates}</p>
                <Hr/>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
                    {
                        dbData.certificates.map((certificate, index) => (
                            <a key={index} href={certificate.link} target='_blank'>
                                <div className='w-full shadow-light-inner dark:shadow-dark-inner p-2 rounded-2xl'>
                                    <div
                                        className='flex flex-row gap-5 w-full shadow-light-outer dark:shadow-dark-outer rounded-2xl p-5 items-center'>
                                        <div
                                            className='flex-shrink-0 w-24 h-24 text-red hidden sm:flex justify-center items-center rounded-full shadow-light-inner dark:shadow-dark-inner'>
                                            <GiRibbonMedal size={45}/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h3 className='text-gray-700 text-md mb-0.5 dark:text-gray-100'>
                                                {certificate.title}
                                            </h3>
                                            <p className='text-sm text-gray-500 dark:text-gray-400 mb-0.5'>{certificate.subtitle}</p>
                                            <p className='text-xs text-gray-400 dark:text-gray-500'>{certificate.date}</p>
                                        </div>
                                    </div>import PersonalData from '../Data/cvData/MainData.json';

                                </div>
                            </a>
                        ))
                    }

                </div>
            </main>
        </MainLayout>
    );
};

export default About;