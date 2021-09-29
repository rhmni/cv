import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import Hr from "../Components/UI/Hr";
import {RiMapPinLine} from 'react-icons/ri';
import {MdLanguage} from 'react-icons/md';
import {IoMailOutline, IoCallOutline} from 'react-icons/io5';
import ContactForm from "../Blocks/ContactForm";
import {toast, Toaster} from "react-hot-toast";
import useTranslate from "../utils/hooks/useTranslate";
import useDb from "../utils/hooks/useDb";
import Title from "../Components/Title";

const Contact = props => {

    const translateData = useTranslate();
    const dbData = useDb();

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(dbData.email);
        toast.success(translateData.toastMessage.emailCopy);
    }

    const handleCopyPhone = () => {
        navigator.clipboard.writeText(dbData.phone);
        toast.success(translateData.toastMessage.phoneCopy);
    }

    const handleCopySite = () => {
        navigator.clipboard.writeText(dbData.site);
        toast.success(translateData.toastMessage.siteCopy);
    }


    return (
        <MainLayout>
            <div className='ltr:font-en rtl:font-fa'><Toaster /></div>
            <main className='flex flex-col justify-start'>
                <Title title={translateData.contactInfo} />
                <div className='w-full mt-10 mb-12'>

                    <div
                        className='md:-mb-12 -mb-16 bg-light bg-blue-600 dark:bg-dark dark:shadow-dark-inner relative flex flex-row items-center justify-center text-red w-24 h-24 rounded-full mx-auto shadow-light-inner'>
                        <RiMapPinLine size={45}/>
                    </div>

                    <div
                        className='w-full rounded-2xl shadow-light-inner dark:shadow-dark-inner p-2 invisible md:visible'>
                        <div
                            className='h-52 flex flex-row justify-center items-center w-full rounded-2xl shadow-light-outer dark:shadow-dark-outer'>
                            <p className='text-xl visible dark:text-gray-100 dark:text-gray-100 text-gray-700 text-center ltr:font-en rtl:font-fa'>{dbData.city}</p>
                        </div>
                    </div>

                    <div
                        className='flex flex-col md:flex-row w-full md:gap-5 gap-10 justify-between relative md:-mt-10'>
                        <div className='flex flex-col items-center w-full md:w-1/3 px-2 gap-4'>
                            <div
                                className='bg-light dark:bg-dark dark:shadow-dark-inner flex flex-row w-16 h-16 rounded-full justify-center items-center shadow-light-inner text-red'>
                                <IoMailOutline size={30}/>
                            </div>
                            <div
                                onClick={handleCopyEmail}
                                className='cursor-pointer w-full
                                    dark:text-gray-400 dark:shadow-dark-inner dark:bg-dark
                                    shadow-light-inner bg-light rounded-full text-gray-500
                                    mx-auto text-center px-6 py-1.5 text-sm
                                '
                            >
                                <span className='ltr:font-en rtl:font-fa'>{translateData.email} </span>
                                :
                                <span className='font-en'> {dbData.email}</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full md:w-1/3 px-2 gap-4'>
                            <div
                                className='bg-light dark:shadow-dark-inner dark:bg-dark dark:shadow-dark-inner  flex flex-row w-16 h-16 rounded-full justify-center items-center shadow-light-inner text-red'>
                                <IoCallOutline size={30}/>
                            </div>
                            <div
                                onClick={handleCopyPhone}
                                className='cursor-pointer w-full
                                    dark:text-gray-400 dark:shadow-dark-inner dark:bg-dark
                                    shadow-light-inner bg-light rounded-full text-gray-500
                                    mx-auto text-center px-6 py-1.5 text-sm
                                '
                            >
                                <span className='ltr:font-en rtl:font-fa'>{translateData.phone} </span>
                                :
                                <span className='font-en'> {dbData.phone}</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full md:w-1/3 px-2 gap-4'>
                            <div
                                className='bg-light flex flex-row w-16 dark:bg-dark dark:shadow-dark-inner  h-16 rounded-full justify-center items-center shadow-light-inner text-red'>
                                <MdLanguage size={33}/>
                            </div>
                            <div
                                onClick={handleCopySite}
                                className='cursor-pointer w-full
                                    dark:text-gray-400 dark:shadow-dark-inner dark:bg-dark
                                    shadow-light-inner bg-light rounded-full text-gray-500
                                    mx-auto text-center px-6 py-1.5 text-sm
                                '
                            >
                                <span className='ltr:font-en rtl:font-fa'>{translateData.site} </span>
                                :
                                <span className='font-en'> {dbData.site}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <Title title={translateData.sendEmail} />
                <div className='mt-8'>
                    <ContactForm />
                </div>
            </main>
        </MainLayout>
    );
};

export default Contact;