import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = props => {
  const adminUsername = 'admin';
  const adminPassword = 'admin';
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const handleClick = e => {
    if (username === adminUsername && password === adminPassword) {
      // props.setAdmin('Admin');
      props.setIsLoggedIn(true);
    } else {
      e.preventDefault();
      setError('Wrong username or password');
    }
  };

  return (
    <>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h1 className="login">Login</h1>
          <Form>
            <div className="mb-3">
              <label className="mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control login-form"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control login-form"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input me-2"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember my password
                </label>
              </div>
            </div>
            <div className="mb-3 login-error">{error}</div>
            <div className="d-grid">
              <Link to="/admin" className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Submit
                </button>
              </Link>
            </div>
            <p className="forgot-password text-right">
              <a href="#">Forgot password?</a>
              <br></br>
              <a href="#">New customer? Register</a>
            </p>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
