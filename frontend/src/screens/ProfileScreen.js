import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import getUserProfile from '../features/async-actions/userProfileAction';
import updateUserProfile from '../features/async-actions/userUpdateProfileAction';
import { resetUpdateSuccess } from '../features/userUpdateProfileSlice';

function ProfileScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  // New reference to check whether the component is still mounted
  const isMounted = useRef(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const userProfileState = useSelector((state) => state.userProfile);
  const { userProfile, isLoading, error } = userProfileState;

  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;

  const userUpdateProfileState = useSelector(
    (state) => state.userUpdateProfile
  );
  const { success } = userUpdateProfileState;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!userProfile) {
        dispatch(getUserProfile());
      } else {
        setName(userInfo.name);
        setEmail(userInfo.email);
      }
    }

    // Reset the success state when the component unmounts
    return () => {
      if (!isMounted.current) {
        dispatch(resetUpdateSuccess());
      }
    };
  }, [dispatch, navigate, userInfo, userProfile]);

  useEffect(() => {
    return () => {
      // Set the reference to false when the component unmounts
      isMounted.current = false;
    };
  }, []);

  /*Form always need a preventDefault*/
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== comfirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(resetUpdateSuccess());
      dispatch(
        updateUserProfile({
          id: userInfo._id,
          name: name,
          email: email,
          password: password,
        })
      );
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
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
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
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
}

export default ProfileScreen;
