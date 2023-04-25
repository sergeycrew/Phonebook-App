import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputs = {
    email: setEmail,
    password: setPassword,
  };

  const handleInput = e => {
    inputs[e.target.name](e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(logIn(user));
    console.log(user);
    setEmail('');
    setPassword('');
  };

  return (
    <MDBContainer
      fluid
      className="p-4"
      style={{
        marginTop: 70,
      }}
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
          style={{ marginLeft: 50 }}
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Your Personal
            <br />
            <span className="text-primary">Phonebook</span>
          </h1>

          <p className="px-3" style={{ color: 'hsl(217, 10%, 50.8%)' }}>
            Connected to Backend API.
            <br />
            Simple tool to Register your Account, Log In and Log Out.
            <br />
            Add, Remove or Filter Contacts. Fast and Secured.
          </p>
        </MDBCol>

        <MDBCol
          md="6"
          style={{
            width: 600,
          }}
        >
          <form onSubmit={handleSubmit}>
            <MDBCard className="my-5">
              <MDBCardBody
                className="p-5"
                style={{
                  height: 300,
                }}
              >
                <MDBInput
                  wrapperClass="mb-4"
                  onChange={handleInput}
                  label="Email"
                  id="form1"
                  name="email"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  onChange={handleInput}
                  label="Password"
                  name="password"
                  id="form1"
                  type="password"
                />

                <MDBBtn
                  className="w-100 mb-4"
                  size="md"
                  type="submit"
                  style={{
                    marginTop: 15,
                  }}
                >
                  LOGIN
                </MDBBtn>

                <div className="text-center">
                  <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                    Don't have an account?{' '}
                    <NavLink to="/register" style={{ color: '#393f81' }}>
                      Register here
                    </NavLink>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
