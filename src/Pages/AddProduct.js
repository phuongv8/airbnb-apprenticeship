import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddProduct = props => {
  const [productID, setProductId] = useState();
  const [sku, setSku] = useState();
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState();

  function addProduct() {
    const newData = {
      id: productID,
      sku: sku,
      img: img,
      title: title,
      description: description,
      price: Number(price),
      quantity: Number(quantity),
      quantityInCart: 0,
      category: category,
    };
    props.products.push(newData);
  }

  return (
    <>
      <Row className="mb-4">
        <Link to="/admin" className="mb-3">
          <Button className="sm" size="sm">
            Return to inventory
          </Button>
        </Link>
        <h4>Add Product</h4>
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
              <Form.Label>SKU</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setSku(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setImg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                className="login-form"
                onChange={e => setCategory(e.target.value)}
              />
            </Form.Group>
            <Button onClick={addProduct}>Add product</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddProduct;
