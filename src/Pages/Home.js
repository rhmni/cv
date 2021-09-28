import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import SocialLink from "../Components/SocialLink";
import {
    RiGithubLine,
    RiLinkedinLine,
    RiInstagramLine,
    RiGoogleLine,
    RiTwitterLine,
} from "react-icons/ri";
import useTranslate from "../utils/hooks/useTranslate";
import useDb from "../utils/hooks/useDb";



const Home = props => {

    const dbData = useDb();
    const translateData = useTranslate();

    return (
        <MainLayout>
            <main className='flex flex-col items-center mt-16'>
                <h1 className='text-5xl dark:text-gray-100 text-gray-700 text-center leading-tight'>
                    {dbData.name}
                </h1>
                <h3 className='mt-2 text-lg dark:text-gray-400 text-gray-500 text-center'>
                    {dbData.subTitle}
                </h3>
                <ul className='flex flex-row flex-wrap justify-center mt-5 gap-2'>
                    <SocialLink link={dbData.linkedin} title={translateData.socialLinks.linkedin}>
                        <RiLinkedinLine size={20}/>
                    </SocialLink>
                    <SocialLink link={dbData.github} title={translateData.socialLinks.github}>
                        <RiGithubLine size={20}/>
                    </SocialLink>
                    <SocialLink link={dbData.instagram} title={translateData.socialLinks.instagram}>
                        <RiInstagramLine size={20}/>
                    </SocialLink>
                    <SocialLink link={`mailto:${dbData.email}`} title={translateData.socialLinks.email}>
                        <RiGoogleLine size={20}/>
                    </SocialLink>
                    <SocialLink link={dbData.twitter} title={translateData.socialLinks.twitter}>
                        <RiTwitterLine size={20}/>
                    </SocialLink>
                </ul>
            </main>
        </MainLayout>
    );
};

export default Home;