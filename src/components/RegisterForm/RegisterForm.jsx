import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Notify } from 'notiflix';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
    rePassword: setRePassword,
  };

  const handleInput = e => {
    inputs[e.target.name](e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password === rePassword) {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);

      dispatch(register(user));
      setName('');
      setEmail('');
      setPassword('');
      setRePassword('');
      console.log(user);
    } else {
      return Notify.info(`Passwords not matching`);
    }
  };

  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          style={{ marginLeft: 50 }}
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Please Register
            <br />
            <span className="text-primary">Your Phonebook</span>
          </h1>
        </MDBCol>
        <MDBCol md="6" style={{ width: 600 }}>
          <form onSubmit={handleSubmit}>
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    onChange={handleInput}
                    label="Full name"
                    name="name"
                    id="form1"
                    type="text"
                    required
                  />
                </MDBCol>

                <MDBInput
                  wrapperClass="mb-4"
                  onChange={handleInput}
                  label="Email"
                  name="email"
                  id="form1"
                  type="email"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  onChange={handleInput}
                  label="Password"
                  name="password"
                  id="form1"
                  type="password"
                  minlength="7"
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  onChange={handleInput}
                  label="Repeat password"
                  name="rePassword"
                  id="form1"
                  type="password"
                  minlength="7"
                  required
                />

                <MDBBtn
                  className="w-100 mb-4"
                  size="md"
                  type="submit"
                  style={{
                    marginTop: 30,
                  }}
                >
                  sign up
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterForm;
