import React from 'react'
import './signup.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';

export const Signup = () => {
    return (
        <div className='container-signup'>
            <Formik
            initialValues={{firstName: '', lastName: '', email: '', password: '', picked: '',timeToContact: "", }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
                lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            <Form>
                <h1>¡Bienvenido a la comunidad!</h1>
                <Field placeholder='Ingresa tu nombre' className='field' name="firstName" type="text" />
                <ErrorMessage name="firstName" />
                <Field placeholder='Ingresa tu apellido' className='field' name="lastName" type="text" />
                <label>
                <Field type="radio" name="picked" value="M" />
                Masculino
                </label>
                <label>
                <Field type="radio" name="picked" value="F" />
                Femenino
                </label>
                <ErrorMessage name="lastName" />
                <Field placeholder='Ingresa tu email' className='field' name="email" type="email" />
                <ErrorMessage name="email" />
                <Field className='field' placeholder='Ingresa tu contraseña' type="password" name="password" />
                <ErrorMessage className='error' name="password" component="div" />
                <button type="submit">Registrarme</button>
            </Form>
            </Formik>
        </div>
    )
}
