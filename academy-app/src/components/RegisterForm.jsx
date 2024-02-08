import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUser, getUserByEmail } from './../helpers/apiUsers';

export const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    repitePassword: '',
  });

  const handleOnChange = (e) => {
    setFormValues({
      // name: formValues.name,
      // email: formValues.email,
      // password: formValues.password,
      // repitePassword: formValues.repitePassword,
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.repitePassword) {
      console.log('Las contraseñas no coinciden');
      return;
    }
    const user = await getUserByEmail(formValues.email);

    if (user) {
      console.log('El email ya esta en uso');
      return;
    }

    await createUser(formValues);
    console.log('Formulario enviado', formValues);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          name='name'
          value={formValues.name}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          value={formValues.email}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          name='password'
          value={formValues.password}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='repitePassword'>
        <Form.Label>Repite Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Repite password'
          name='repitePassword'
          value={formValues.repitePassword}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
