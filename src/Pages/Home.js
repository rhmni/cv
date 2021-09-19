import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import SocialLink from "../Components/SocialLink";
import {
    RiGithubLine,
    RiLinkedinLine,
    RiInstagramLine,
    RiGoogleLine,
} from "react-icons/ri";


const Home = props => {

    return (
        <MainLayout>
                <main className='flex flex-col items-center mt-16'>
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
                </main>
        </MainLayout>
    );
};

export default Home;