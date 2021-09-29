import React, {useRef, useEffect} from 'react';
import MainLayout from "../Layouts/MainLayout";
import SocialLink from "../Components/SocialLink";
import Typed from "typed.js";
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

    const typedElement = useRef(null);
    const dbData = useDb();
    const translateData = useTranslate();

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [...dbData.typingItems],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop:true,
            showCursor:false
        });
        return () => {
            typed.destroy();
        };
    }, [dbData.typingItems]);

    return (
        <MainLayout>
            <main className='flex flex-col items-center mt-16 ltr:font-en rtl:font-fa'>
                <h1 className='text-5xl dark:text-gray-100 text-gray-700 text-center leading-tight'>
                    {dbData.name}
                </h1>
                <h3 ref={typedElement} className='mt-2 text-lg dark:text-gray-400 text-gray-500 text-center'/>
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