import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditProduct = props => {
  const [productID, setProductId] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newQuantity, setNewQuantity] = useState();

  function changeProduct() {
    const update = props.products.map(product => {
      if (productID === product.id) {
        return {
          ...product,
          price: newPrice,
          quantity: newQuantity,
        };
      }
      return product;
    });

    props.setProducts(update);
    console.log(`edited products`, props.products);
  }

  return (
    <>
      <Row className="mb-4">
        <Link to="/admin" className="mb-3">
          <Button className="sm" size="sm">
            Return to inventory
          </Button>
        </Link>
        <h4>Edit Product</h4>
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setProductId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setNewPrice(parseInt(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setNewQuantity(parseInt(e.target.value))}
              />
            </Form.Group>
            <Button onClick={changeProduct}>Submit Product Change</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default EditProduct;
