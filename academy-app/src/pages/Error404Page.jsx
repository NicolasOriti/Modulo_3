import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import error from '../images/page404.png';

export const Error404Page = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img style={{ width: '100%' }} className='error404' src={error} alt='Error 404' />
        </div>
        <Link to={'/'}>
          <Button style={{ width: '100%' }} variant='info'>
            Volver
          </Button>
        </Link>
      </div>
    </div>
  );
};
