import React from 'react'
import './login.css'
import image from './images/image.jpg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const log = {
    mail: 'prueba@prueba.com',
    password: '123'
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const Login = () => {
    return (
        <div className='container-login'>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={async (values) => {
                await sleep(500);
                if (values.email === log.mail && values.password === log.password){
                    console.log(values);
                    MySwal.fire({
                        title: 'Bienvenido',
                        text: 'Te estabamos esperando!',
                        icon: 'success',
                        confirmButtonText: 'Entendido',
                        confirmButtonColor: '#00dfc0'
                      })
                }else{
                    console.log('invalido');
                    MySwal.fire({
                        title: 'Ups..',
                        text: 'Usuario o contraseñas invalidos',
                        icon: 'warning',
                        confirmButtonText: 'Entendido',
                        confirmButtonColor: '#00dfc0'
                      })
                }
              }}
            >
            {({ isSubmitting }) => (
                
                <Form>
                <h1>Hola, bienvenido de vuelta!</h1>
                <Field placeholder='Ingresa tu email' className='field' type="email" name="email" />
                <ErrorMessage className='error' name="email" component="div" />
                <Field placeholder='Ingresa tu contraseña' className='field' type="password" name="password" />
                <ErrorMessage className='error' name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                    Enviar
                </button>
                <p>¿Aún no tienes cuenta? Registrate aquí</p>
                </Form>
                )}
        </Formik>
        <img src={image} alt='log'/>
        </div>
    )
}
