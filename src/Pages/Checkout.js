import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const useValidation = (
  email,
  card,
  name,
  address,
  setEmailError,
  setCardError,
  setEmptyName,
  setEmptyAddress
) => {
  useEffect(() => {
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setEmailError('Email is not valid');
    } else {
      setEmailError('');
    }

    if (!card.match(/^4[0-9]{12}(?:[0-9]{3})?$/)) {
      setCardError('Credit card should be 13 or 16 digits long');
    } else {
      setCardError('');
    }

    if (name.trim().length === 0) {
      setEmptyName('Empty input');
    } else {
      setEmptyName('');
    }

    if (address.trim().length === 0) {
      setEmptyAddress('Empty input');
    } else {
      setEmptyAddress('');
    }
  }, [
    email,
    card,
    name,
    address,
    setEmailError,
    setCardError,
    setEmptyName,
    setEmptyAddress,
  ]);
};

const Checkout = props => {
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [emailError, setEmailError] = useState('');
  const [cardError, setCardError] = useState('');
  const [emptyName, setEmptyName] = useState('');
  const [emptyAddress, setEmptyAddress] = useState('');

  useValidation(
    email,
    card,
    name,
    address,
    setEmailError,
    setCardError,
    setEmptyName,
    setEmptyAddress
  );

  const navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();

    props.cart.forEach(item => {
      item.quantity -= item.quantityInCart;
      item.quantityInCart = 0;
    });

    if (
      emailError === '' &&
      cardError === '' &&
      emptyName === '' &&
      emptyAddress === ''
    ) {
      props.setCart([]);
      props.setItemCount(0);
      props.setTotal(0);
      navigate('/confirmation');
    }
  };

  return (
    <>
      <Row>
        <h4>Guess Checkout</h4>
      </Row>
      <Row>
        <Col md={6} className="my-4">
          <Form>
            <Row className="my-3">
              <Form.Group as={Col}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  className="login-form"
                  onChange={e => setName(e.target.value)}
                />
                <div className="checkout-error">{emptyName}</div>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  className="login-form"
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="checkout-error">{emailError}</div>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                className="login-form"
                onChange={e => setAddress(e.target.value)}
              />
              <div className="checkout-error">{emptyAddress}</div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Credit Card</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setCard(e.target.value)}
              />
              <div className="checkout-error">{cardError}</div>
            </Form.Group>
          </Form>
        </Col>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>Order Summary</h4>
                <strong>Subtotal</strong>: ${props.total.toFixed(2)}
                <br></br>
                <strong>Shipping</strong>: Free
              </ListGroup.Item>
              <ListGroup.Item className="d-grid">
                {/* <Link to="/confirmation" className="d-grid"> */}
                <Button
                  type="button"
                  className="btn-dark"
                  onClick={handleClick}
                >
                  Place Order
                </Button>
                {/* </Link> */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Checkout;
