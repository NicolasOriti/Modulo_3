import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { createCourse } from '../helpers/apiCourses';

export const CreateCourseModal = (props) => {
  const [formValues, setFormValues] = useState({
    title: '',
    detalle: '',
    mentor: '',
  });

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async () => {
    await createCourse(formValues);
    props.onHide();
  };

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={formValues.title}
              onChange={handleOnChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='detalle'>
            <Form.Label>Detalle</Form.Label>
            <Form.Control
              as='textarea'
              name='detalle'
              value={formValues.detalle}
              onChange={handleOnChange}
              rows={3}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='mentor'>
            <Form.Label>Mentor</Form.Label>
            <Form.Control
              type='text'
              name='mentor'
              value={formValues.mentor}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Close
        </Button>
        <Button variant='primary' onClick={handleOnSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
