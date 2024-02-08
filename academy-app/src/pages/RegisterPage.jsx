import React from 'react';
import { RegisterForm } from '../components/RegisterForm';
import home1 from  '../images/home1.png'

export const RegisterPage = () => {
  return (
    <div className='container'>
      <div className='row mb-3'>
        <div className='col-6 offset-3'>
          <div className='card card-registro'>
            <img src={home1} className='card-img-top' alt='portada' />
            <div className='card-body'>
              <h3 className='card-title text-center mb-3'>Crea tu Cuenta gratis</h3>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
