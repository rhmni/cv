import React from 'react';
import ProfileImage from "../assets/profile.jpg";
import {RiCameraLine, RiHome2Line, RiPhoneLine, RiUser3Line} from "react-icons/ri";
import HeaderItem from "../Components/HeaderItem";

const Header = () => {
    return (
        <div
            className='
                     flex flex-col items-center
                     px-8 pt-14 pb-16 lg:mb-14
                     xl:w-96 lg:w-72 w-full
                     bg-light dark:bg-dark shadow-light-outer dark:shadow-dark-outer rounded-3xl
                     '
        >
            <div className='mb-8 w-52 shadow-light-inner dark:shadow-dark-inner p-2 rounded-full'>
                <div className='shadow-light-outer dark:shadow-dark-outer p-2 rounded-full'>
                    <img src={ProfileImage} alt="" className='rounded-full'/>
                </div>
            </div>
            <div className='mb-6'>
                <h2 className='text-center text-3xl mb-2 dark:text-gray-200 text-gray-700'>علی رحمانی</h2>
                <h5 className='text-center dark:text-gray-400 text-gray-500 text-lg'>Full Stack Developer</h5>
            </div>
            <ul className='flex flex-col gap-4 w-full items-center'>

                <HeaderItem isActive text='صفحه اصلی'>
                    <RiHome2Line size={27}/>
                </HeaderItem>

                <HeaderItem text='درباره من'>
                    <RiUser3Line size={27}/>
                </HeaderItem>

                <HeaderItem text='پروژه ها'>
                    <RiCameraLine size={27}/>
                </HeaderItem>

                <HeaderItem text='ارتباط با من'>
                    <RiPhoneLine size={27}/>
                </HeaderItem>

            </ul>
        </div>
    );
};

export default Header;