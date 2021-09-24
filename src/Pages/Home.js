import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import SocialLink from "../Components/SocialLink";
import PersonalData from '../Data/cvData/MainData.json';
import {
    RiGithubLine,
    RiLinkedinLine,
    RiInstagramLine,
    RiGoogleLine,
} from "react-icons/ri";



const Home = props => {

    const personalData = PersonalData

    return (
        <MainLayout>
            <main className='flex flex-col items-center mt-16'>
                <h1 className='text-5xl dark:text-gray-100 text-gray-700 text-center leading-tight'>
                    {personalData.name}
                </h1>
                <h3 className='mt-2 text-lg dark:text-gray-400 text-gray-500 text-center'>
                    برنامه نویس فرانت اند
                </h3>
                <ul className='flex flex-row flex-wrap justify-center mt-5 gap-2'>
                    <SocialLink link={personalData.linkedin} title='لینکدین'>
                        <RiLinkedinLine size={20}/>
                    </SocialLink>
                    <SocialLink link={personalData.github} title='گیت هاب'>
                        <RiGithubLine size={20}/>
                    </SocialLink>
                    <SocialLink link={personalData.instagram} title='اینستاگرام'>
                        <RiInstagramLine size={20}/>
                    </SocialLink>
                    <SocialLink link={`mailto:${personalData.email}`} title='ایمیل'>
                        <RiGoogleLine size={20}/>
                    </SocialLink>
                </ul>
            </main>
        </MainLayout>
    );
};

export default Home;