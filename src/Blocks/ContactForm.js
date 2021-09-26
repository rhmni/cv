import React from 'react';
import {Form, Formik} from "formik";
import TextInput from "../Components/UI/TextInput";
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';


const ContactForm = props => {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'نام کوتاه است')
            .max(50, 'نام بیش از حد بزرگ است')
            .required('نام نمیتواند خالی باشد'),

        email: Yup.string()
            .min(5, 'ایمیل کوتاه است')
            .email('آدرس ایمیل نامعتبر است')
            .required('آدرس ایمیل نمیتواند خالی باشد'),

        subject: Yup.string()
            .min(5, 'موضوع کوتاه است')
            .max(120, 'موضوع بیش از حد بزرگ است'),

        body: Yup.string()
            .required('پیام شما نمیتواند خالی باشد')
            .min(10, 'پیام شما کوتاه است')
    });

    const initialValues = {
        name: '',
        email: '',
        subject: '',
        body: '',
    }

    const onSubmit = (values, actions) => {
        const emailPromise = emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            values,
            process.env.REACT_APP_USER_ID,
        );
        toast.promise(emailPromise, {
            loading: 'در حال ارسال',
            success: 'پیام شما ارسال شد',
            error: 'پیام ارسال نشد لطفا دوباره امتحان کنید',
        });
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>


            {formik => (

                <Form className='flex flex-col'>
                    <fieldset
                        name='inputs'
                        className='grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-8 text-gray-500 dark:text-gray-400'
                    >

                        <TextInput name={'name'} placeholder={'نام'}/>
                        <TextInput name={'email'} type={'email'} placeholder={'ایمیل'}/>
                        <TextInput isLarge name={'subject'} placeholder={'موضوع'}/>
                        <TextInput isLarge as={'textarea'} rows={6} name={'body'} placeholder={'پیام شما'}/>

                    </fieldset>

                    <button
                        type='submit'
                        className='transition duration-300 mt-7 w-full sm:w-32 dark:shadow-dark-outer shadow-light-outer hover:shadow-light-inner py-2 rounded-xl text-green-600 dark:hover:shadow-dark-inner'
                    >
                        ارسال پیام
                    </button>
                </Form>

            )}

        </Formik>
    );
};

export default ContactForm;