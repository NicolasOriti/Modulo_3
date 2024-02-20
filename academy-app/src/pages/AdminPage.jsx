import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { NavBar } from '../components/NavBar';
import { CourseTable } from '../components/CourseTable';
import { CreateCourseModal } from '../components/CreateCourseModal';

export const AdminPage = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Admin</h2>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3>Administrador de cursos</h3>
          </div>
          <div className='col-2'>
            <Button variant='primary' onClick={() => setModalShow(true)}>
              Add course
            </Button>
          </div>
        </div>
        <hr />
        <div className='row'>
          <CourseTable />
        </div>
      </div>
      <CreateCourseModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
