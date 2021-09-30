import React, {useState} from 'react';
import MainLayout from "../Layouts/MainLayout";
import Hr from "../Components/UI/Hr";
import {BiShowAlt} from 'react-icons/bi';
import {RiGithubLine} from 'react-icons/ri';
import useTranslate from "../utils/hooks/useTranslate";
import Title from "../Components/Title";
import useDb from "../utils/hooks/useDb";
import useProject from "../utils/hooks/useProject";
import Badge from "../Components/UI/Badge";

const Projects = props => {

    const translateData = useTranslate();

    const dbData = useDb();

    const [tabTag, setTabTag] = useState(dbData.projectsCategory[0].tag);

    const [projects, projectLength] = useProject(tabTag, dbData.projects);

    const handleTab = (tag) => {
        setTabTag(tag)
    };

    return (
        <MainLayout>
            <main className='flex flex-col justify-start'>
                <Title title={translateData.myProjects}/>
                <ul className='flex flex-col justify-center lg:flex-row gap-5 items-center mt-8 mx-auto mb-8 ltr:font-en rtl:font-fa'>
                    {
                        dbData.projectsCategory.map((category, index) => (
                            <li
                                key={index}
                                className={`${tabTag === category.tag ? 'shadow-light-inner dark:shadow-dark-inner' : 'hover:shadow-light-inner dark:hover:shadow-dark-inner'} transition duration-150 dark:text-gray-400 text-gray-700 rounded-full`}
                            >
                                <button onClick={() => handleTab(category.tag)} className='px-5 py-2 rounded-full uppercase'>
                                    {category.title}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <Hr isCenetr/>
                {
                    projects.map((project, index) => (

                        <div key={index} className='flex flex-col mt-14'>
                            <p className='flex-wrap flex gap-2 mb-2.5 items-center'>
                                <span className='text-xl text-gray-700 dark:text-gray-100 ltr:font-en rtl:font-fa'>
                                    {project.title}
                                </span>
                                <Badge text={project.date}/>
                            </p>
                            <div className='flex flex-row flex-wrap gap-4 justify-start ltr:font-en rtl:font-fa'>

                                {
                                    project.demoLink === '' ? null :
                                        <p className='flex flex-row items-center gap-1'>
                                            <span className='ml-0.5 text-gray-700 dark:text-gray-400'>
                                                <BiShowAlt size={20}/>
                                            </span>
                                            <span className='text-gray-700 dark:text-gray-400'>
                                                {translateData.projectLink.demo.wordOne}
                                                <a target='_blank' className='text-red' href={project.demoLink}> {translateData.projectLink.demo.wordTwo}</a>
                                            </span>
                                        </p>
                                }

                                {
                                    project.githubLink === '' ? null :
                                        <p className='flex flex-row items-center gap-1'>
                                            <span className='ml-0.5 text-gray-700 dark:text-gray-400'>
                                                <RiGithubLine size={20}/>
                                            </span>
                                            <span className='text-gray-700 dark:text-gray-400'>
                                                {translateData.projectLink.github.wordOne}
                                                <a target='_blank' className='text-red' href={project.githubLink}> {translateData.projectLink.github.wordTwo}</a>
                                            </span>
                                        </p>
                                }

                            </div>
                            <div className='w-full h-1.5 my-3 shadow-light-inner dark:shadow-dark-inner rounded-full'/>
                            {
                                project.descriptions.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className={`mb-2 text-md dark:text-gray-400 text-gray-500 ltr:font-en rtl:font-fa leading-7`}
                                    >
                                        {paragraph}
                                    </p>
                                ))
                            }
                            <div className='w-full h-6'/>
                            {
                                index + 1 === projectLength ? null : <Hr isCenetr/>
                            }
                        </div>

                    ))
                }
            </main>
        </MainLayout>
    );
};

export default Projects;