import React from 'react'
import './login.css'
import image from './images/image-login.jpg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Redirect } from 'react-router-dom';

const MySwal = withReactContent(Swal)

export const Login = () => {
    const handleSubmit = (values) => {
        const {email, password} = values;
        console.log(values);
        fetch('https://ecomerce-master.herokuapp.com/api/v1/login', 
            {
                method:'POST',
                body: JSON.stringify({email , password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(resp=>{
            if (resp.ok){
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
            return resp.json()
        }).then((data)=>{
            const {role, token} = data
                localStorage.setItem('token', token)
                localStorage.setItem('role', role)
        })
    }

    if(localStorage.getItem('token')){
        return <Redirect to="/home" />
    }

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
            onSubmit={handleSubmit}
            >
            {() => (
                
                <Form>
                <h1>Hola, bienvenido de vuelta!</h1>
                <Field placeholder='Ingresa tu email' className='field' type="email" name="email" />
                <ErrorMessage className='error' name="email" component="div" />
                <Field placeholder='Ingresa tu contraseña' className='field' type="password" name="password" />
                <ErrorMessage className='error' name="password" component="div" />
                <button type="submit" >
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
