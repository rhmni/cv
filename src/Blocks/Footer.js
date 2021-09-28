import React from 'react';
import Hr from "../Components/UI/Hr";
import {RiDownloadLine, RiPrinterLine} from "react-icons/ri";
import useTranslate from "../utils/hooks/useTranslate";

const Footer = props => {

    const translateData = useTranslate();

    return (
        <footer>
            <div className='w-full h-16'/>
            <Hr isCenetr />
            <div className='flex flex-row flex-wrap justify-between mt-14 gap-3'>
                <div className='flex flex-row'>
                    <div
                        className='flex items-center cursor-pointer text-gray-500 dark:text-gray-400 gap-3'
                    >
                                    <span
                                        className='
                                            flex flex-row items-center justify-center
                                            rounded-full w-14 h-14 cursor-pointer text-red
                                            shadow-light-outer hover:shadow-light-inner
                                            dark:shadow-dark-outer dark:hover:shadow-dark-inner
                                            transition duration-300
                                        '
                                    >
                                        <RiPrinterLine size={25}/>
                                    </span>
                        <span>{translateData.printCv}</span>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div
                        className='flex items-center cursor-pointer text-gray-500 dark:text-gray-400 gap-3'
                    >
                                    <span
                                        className='
                                            flex flex-row items-center justify-center
                                            rounded-full w-14 h-14 cursor-pointer text-red
                                            shadow-light-outer hover:shadow-light-inner
                                            dark:shadow-dark-outer dark:hover:shadow-dark-inner
                                            transition duration-300
                                        '
                                    >
                                        <RiDownloadLine size={25}/>
                                    </span>
                        <span>{translateData.downloadCv}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;