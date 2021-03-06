import React, {useRef, useEffect} from 'react';
import MainLayout from "../Layouts/MainLayout";
import SocialLink from "../Components/SocialLink";
import Typed from "typed.js";
import {
    RiGithubLine,
    RiLinkedinLine,
    RiInstagramLine,
    RiGoogleLine,
    RiTwitterLine, RiSkypeLine,
} from "react-icons/ri";
import useTranslate from "../utils/hooks/useTranslate";
import useDb from "../utils/hooks/useDb";
import useSetting from "../utils/hooks/useSetting";


const Home = props => {

    const typedElement = useRef(null);

    const dbData = useDb();

    const translateData = useTranslate();

    const settingData = useSetting();

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

                    <SocialLink isShow={settingData.linkedin} link={dbData.linkedin} title={translateData.socialLinks.linkedin}>
                        <RiLinkedinLine size={20}/>
                    </SocialLink>

                    <SocialLink isShow={settingData.github} link={dbData.github} title={translateData.socialLinks.github}>
                        <RiGithubLine size={20}/>
                    </SocialLink>

                    <SocialLink isShow={settingData.instagram} link={dbData.instagram} title={translateData.socialLinks.instagram}>
                        <RiInstagramLine size={20}/>
                    </SocialLink>

                    <SocialLink isShow={settingData.email} link={`mailto:${dbData.email}`} title={translateData.socialLinks.email}>
                        <RiGoogleLine size={20}/>
                    </SocialLink>

                    <SocialLink isShow={settingData.twitter} link={dbData.twitter} title={translateData.socialLinks.twitter}>
                        <RiTwitterLine size={20}/>
                    </SocialLink>

                    <SocialLink isShow={settingData.skype} link={dbData.skype} title={translateData.socialLinks.skype}>
                        <RiSkypeLine size={23}/>
                    </SocialLink>

                </ul>
            </main>
        </MainLayout>
    );
};

export default Home;