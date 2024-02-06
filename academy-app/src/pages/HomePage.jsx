import React from 'react';
import { NavBar } from '../components/NavBar';
import { Link } from 'react-router-dom';

import '../css/home.css';
import home2 from '../images/home2.png';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className='container home-container'>
        <div className='row'>
          <div className='col-6'>
            <h1 className='font-weight-bold'>
              La plataforma
              <br />
              de aprendizaje
              <br /> para desarrolladores
            </h1>
            <Link to='/register' className='btn btn-outline-info mt-3'>
              Crea tu cuenta
            </Link>
            <p className='text-grey'>Únete a los mas de 500.000 estudiantes</p>
          </div>
          <div className='col-6'>
            <img src={home2} alt='portada1' />
          </div>
        </div>
        <div className='row'>
          <div className='col-8 offset-2 parrafito text-grey'>
            <p>
              Aprende desarrollo web con HTML5, CSS y JavaScript. Backend con Python. React, Go,
              Laravel. Desarrollo móvil con Android, Flutter y mucho más. <b>Desde tu casa.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
