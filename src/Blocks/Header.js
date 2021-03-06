import React from 'react';
import ProfileImage from "../assets/images/profile.jpg";
import {RiCameraLine, RiHome2Line, RiPhoneLine, RiUser3Line} from "react-icons/ri";
import HeaderItem from "../Components/HeaderItem";
import {AppRoutes} from "../Routing/AppRoutes";
import useTranslate from "../utils/hooks/useTranslate";
import useDb from "../utils/hooks/useDb";


const Header = props => {

    const dbData = useDb();
    const translateData = useTranslate();

    return (
        <header
            className='
                flex flex-col items-center h-160 lg:sticky lg:top-4 z-40
                px-8 pt-12 pb-16 lg:mb-14
                xl:w-96 lg:w-72 w-full
                bg-light dark:bg-dark shadow-light-outer dark:shadow-dark-outer rounded-3xl
            '
        >
            <div className='mb-8 w-48 shadow-light-inner dark:shadow-dark-inner p-2 rounded-full'>
                <div className='shadow-light-outer dark:shadow-dark-outer p-2 rounded-full'>
                    <img src={ProfileImage} alt="" className='rounded-full'/>
                </div>
            </div>
            <div className='mb-6'>
                <h2 className='text-center text-3xl mb-2 dark:text-gray-200 text-gray-700 ltr:font-en rtl:font-fa'>{dbData.name}</h2>
                <h5 className='text-center dark:text-gray-400 text-gray-500 text-lg ltr:font-en rtl:font-fa'>{dbData.subTitle}</h5>
            </div>
            <ul className='flex flex-col gap-4 w-full items-center'>

                <HeaderItem path={AppRoutes.HOME} text={translateData.pageOneTitle}>
                    <RiHome2Line size={27}/>
                </HeaderItem>

                <HeaderItem path={AppRoutes.ABOUT} text={translateData.pageTwoTitle}>
                    <RiUser3Line size={27}/>
                </HeaderItem>

                <HeaderItem path={AppRoutes.PROJECTS} text={translateData.pageThreeTitle}>
                    <RiCameraLine size={27}/>
                </HeaderItem>

                <HeaderItem path={AppRoutes.CONTACT} text={translateData.pageFourTitle}>
                    <RiPhoneLine size={27}/>
                </HeaderItem>

            </ul>
        </header>
    );
};

export default React.memo(Header);