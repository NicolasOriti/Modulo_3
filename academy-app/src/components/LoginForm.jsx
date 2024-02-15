import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUserByEmail } from './../helpers/apiUsers';

export const LoginForm = ({ setUser }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const user = await getUserByEmail(formValues.email);

    if (user.password !== formValues.password) {
      return console.log('Credenciales incorrectas');
    }
    console.log('Login exitoso');
    setUser(user);
    loginSuccess();
  };

  const loginSuccess = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
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

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
