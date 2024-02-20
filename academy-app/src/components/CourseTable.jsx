import React, { useEffect, useState } from 'react';
import { deleteCourse, getCourses } from '../helpers/apiCourses';

export const CourseTable = () => {
  const [courses, setCourses] = useState([]);

  const handleDelete = async (id) => {
    let course = courses.find((curso) => {
      return curso.id === id;
    });

    let validator = confirm(`Estas seguro que queres eliminar el curso ${course.title}`);

    if (validator) {
      console.log(`Eliminando el curso con id ${course.id}`);
      await deleteCourse(id);
      await actualizarDatos();
    }
  };

  const actualizarDatos = async () => {
    const datos = await getCourses();
    setCourses(datos);
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  return (
    <>
      <div className='col'>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Título</th>
              <th scope='col'>Detalle</th>
              <th scope='col'>Mentor</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr key={course.id}>
                  <th>{course.title}</th>
                  <td>{course.detalle}</td>
                  <td>{course.mentor}</td>
                  <td>
                    <button
                      className='btn btn-danger mr-2 mb-2'
                      onClick={() => {
                        handleDelete(course.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className='btn btn-warning mr-2 mb-2 '
                      onClick={() => {
                        // modifyCourse(course.id);
                        console.log(`Modificando el curso con id ${course.id}`);
                      }}
                    >
                      Modify
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <ModalCurso show={show} curso={curso} handleClose={handleClose} /> */}
    </>
  );
};
