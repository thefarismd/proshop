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
import getUserLogin from '../features/async-actions/userLoginAction';

function LoginScreen() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*
  location.search is a property of the location object in JavaScript, which 
  represents the URL's query string. It includes everything after the "?" 
  symbol in a URL, including the "?" itself. It can be used to access the
   query parameters of the current URL in a web application.
  */

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const { userInfo, isLoading, error } = useSelector(
    (state) => state.userLogin
  );

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  /*Form always need a preventDefault*/
  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(getUserLogin({ email, password }));
  };

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {isLoading && <Loader></Loader>}
      <Form onSubmit={formSubmitHandler}>
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
            className='mb-3'
          ></FormControl>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?
          <Link
            style={{ marginLeft: 4 }}
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
          >
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
