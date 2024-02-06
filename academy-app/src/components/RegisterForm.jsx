import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const RegisterForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className='mb-3' controlId='username'>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' placeholder='Enter username' />
        {/* <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text> */}
      </Form.Group>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        {/* <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      <Form.Group className='mb-3' controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='re-password'>
        <Form.Label>Repite Password</Form.Label>
        <Form.Control type='password' placeholder='Repite password' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='conditions'>
        <Form.Check type='checkbox' label='Conditions' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
