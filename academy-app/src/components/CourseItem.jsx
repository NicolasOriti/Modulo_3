import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
  let ruta = `/curso/${course.id}`;
  return (
    <Link to={ruta} className='link_course'>
      <div className='col-3'>
        <div className='card'>
          <img src={course.imagen} className='card-img-top' alt='html' />
          <div className='card-body'>
            <h5 className='card-title'>{course.title}</h5>
            <img className='avatar' src={course.img_mentor} alt={course.mentor} />
            <span className='card-text ml-2'>{course.mentor}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
