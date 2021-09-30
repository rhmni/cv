import React from 'react';
import Hr from "../Components/UI/Hr";
import {RiDownloadLine, RiPrinterLine} from "react-icons/ri";
import useTranslate from "../utils/hooks/useTranslate";
import EnCv from '../assets/pdf/CV_EN.pdf'
import FaCv from '../assets/pdf/CV_FA.pdf'
import useLang from "../utils/hooks/useLang";

const Footer = props => {

    const translateData = useTranslate();
    const [lang, setLang] = useLang();

    const handlePrint = () => {
       window.open(lang === 'fa' ? FaCv : EnCv).print();
    }

    return (
        <footer>
            <div className='w-full h-16'/>
            <Hr isCenetr />
            <div className='flex flex-row flex-wrap justify-between mt-14 gap-3 ltr:font-en rtl:font-fa ltr:font-semibold'>
                <div className='flex flex-row'>
                    <div
                        onClick={handlePrint}
                        className='flex items-center cursor-pointer group text-gray-500 dark:text-gray-400 gap-3'
                    >
                                    <span
                                        className='
                                            flex flex-row items-center justify-center
                                            rounded-full w-14 h-14 cursor-pointer text-red
                                            shadow-light-outer group-hover:shadow-light-inner
                                            dark:shadow-dark-outer dark:group-hover:shadow-dark-inner
                                            transition duration-300
                                        '
                                    >
                                        <RiPrinterLine size={25}/>
                                    </span>
                        <span>{translateData.printCv}</span>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <a
                        href={lang === 'fa' ? FaCv : EnCv}
                        download={true}
                        className='flex items-center cursor-pointer group text-gray-500 dark:text-gray-400 gap-3'
                    >
                                    <span
                                        className='
                                            flex flex-row items-center justify-center
                                            rounded-full w-14 h-14 cursor-pointer text-red
                                            shadow-light-outer group-hover:shadow-light-inner
                                            dark:shadow-dark-outer dark:group-hover:shadow-dark-inner
                                            transition duration-300
                                        '
                                    >
                                        <RiDownloadLine size={25}/>
                                    </span>
                        <span>{translateData.downloadCv}</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);