import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Form,
  Button,
  Row,
  Col,
  FormLabel,
  FormControl,
} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import registerUser from '../features/async-actions/userRegisterAction';

function RegisterScreen() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  /*
  location.search is a property of the location object in JavaScript, which
  represents the URL's query string. It includes everything after the "?"
  symbol in a URL, including the "?" itself. It can be used to access the
   query parameters of the current URL in a web application.
  */

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userRegisterState = useSelector((state) => state.userRegister);
  const { userInfo, isLoading, error } = userRegisterState;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
      //   window.location.reload();
    }
  }, [navigate, userInfo, redirect]);

  /*Form always need a preventDefault*/
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== comfirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(registerUser({ name, email, password }));
    }
  };

  const onChangeComfirmPasswordHandler = (event) => {
    setComfirmPassword(event.target.value);
  };

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {isLoading && <Loader></Loader>}
      <Form onSubmit={formSubmitHandler}>
        <Form.Group controlId='name'>
          <FormLabel>Name</FormLabel>
          <FormControl
            type='name'
            placeholder='name'
            value={name}
            onChange={onChangeNameHandler}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId='email'>
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={onChangeEmailHandler}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId='password'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={onChangePasswordHandler}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId='comfirmPassword'>
          <FormLabel>Comfirm Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Comfirm Password'
            value={comfirmPassword}
            onChange={onChangeComfirmPasswordHandler}
            className='mb-3'
          ></FormControl>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an Account?
          <Link
            style={{ marginLeft: 4 }}
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
          >
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;
