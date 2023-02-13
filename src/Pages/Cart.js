import React from 'react';
import {
  Col,
  ListGroup,
  Row,
  Image,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = props => {
  const deleteButton = product => {
    props.setCart(props.cart.filter(item => item.id !== product.id));
    props.setTotal(props.total - product.price * product.quantityInCart);
    props.setItemCount(props.itemCount - product.quantityInCart);
    product.quantityInCart = 0;
  };

  return (
    <>
      <Row>
        <h4>Shopping Cart</h4>
      </Row>
      <Row>
        <Col md={8}>
          {props.cart.length === 0 && (
            <p>
              Your cart is empty.<br></br>
              <Link to="/">Go Back</Link>
            </p>
          )}
          <ListGroup variant="flush">
            {props.cart.map(item => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.img} alt={item.title} fluid rounded />
                  </Col>
                  <Col md={3} className="my-auto">
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                  </Col>
                  <Col md={2} className="my-auto">
                    ${item.price}
                  </Col>
                  <Col md={3} className="my-auto">
                    <Form.Select
                      size="md"
                      defaultValue={item.quantityInCart}
                      onChange={e => {
                        let qty = e.target.value;
                        let changeInQty = qty - item.quantityInCart;
                        item.quantityInCart = qty;
                        props.setTotal(props.total + item.price * changeInQty);
                        props.setItemCount(props.itemCount + changeInQty);
                      }}
                    >
                      {[...Array(item.quantity).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2} className="my-auto">
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => deleteButton(item)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>Subtotal {props.itemCount} items</h4>${props.total}
              </ListGroup.Item>
              <ListGroup.Item className="d-grid">
                <Button
                  type="button"
                  className="btn-block"
                  disabled={props.cart.length === 0}
                >
                  {props.cart.length === 0 ? (
                    <Link
                      to="/checkout"
                      className="disabledCursor"
                      onClick={e => e.preventDefault()}
                    >
                      Checkout
                    </Link>
                  ) : (
                    <Link to="/checkout" className="notDisabled">
                      Checkout
                    </Link>
                  )}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
