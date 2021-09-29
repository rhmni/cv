import React from 'react';
import {Form, Formik} from "formik";
import TextInput from "../Components/UI/TextInput";
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import useTranslate from "../utils/hooks/useTranslate";


const ContactForm = props => {

    const translateData = useTranslate();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, translateData.formErrors.name.min)
            .max(50, translateData.formErrors.name.max)
            .required(translateData.formErrors.name.required),

        email: Yup.string()
            .min(5, translateData.formErrors.email.min)
            .email(translateData.formErrors.email.email)
            .required(translateData.formErrors.email.required),

        subject: Yup.string()
            .min(5, translateData.formErrors.subject.min)
            .max(120, translateData.formErrors.subject.max),

        body: Yup.string()
            .required(translateData.formErrors.body.required)
            .min(10, translateData.formErrors.body.min)
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
            loading: translateData.toastMessage.formLoading,
            success: translateData.toastMessage.formSuccess,
            error: translateData.toastMessage.formError,
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

                        <TextInput name={'name'} placeholder={translateData.namePlaceholder}/>
                        <TextInput name={'email'} type={'email'} placeholder={translateData.emailPlaceholder}/>
                        <TextInput isLarge name={'subject'} placeholder={translateData.subjectPlaceholder}/>
                        <TextInput isLarge as={'textarea'} rows={6} name={'body'} placeholder={translateData.bodyPlaceholder}/>

                    </fieldset>

                    <button
                        type='submit'
                        className='
                            transition duration-300
                            mt-7 py-2 w-full sm:w-44 ltr:font-en rtl:font-fa
                            dark:shadow-dark-outer shadow-light-outer hover:shadow-light-inner dark:hover:shadow-dark-inner
                            rounded-xl text-green-600
                        '
                    >
                        {translateData.submitBtn}
                    </button>
                </Form>

            )}

        </Formik>
    );
};

export default ContactForm;