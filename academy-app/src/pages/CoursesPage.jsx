import { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import '../css/cursos.css';

import CourseItem from '../components/CourseItem';
import { getCourses } from '../helpers/apiCourses';

export const CoursesPage = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCourses().then((cursos) => {
      setCursos(cursos);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className='background-curso'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center my-5'>
              <h3>Conoce nuestros cursos</h3>
            </div>
          </div>
          <div className='row'>
            {cursos.map((course) => {
              return <CourseItem key={course.id} course={course} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
