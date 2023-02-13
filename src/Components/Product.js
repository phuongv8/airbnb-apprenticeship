import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = props => {
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${props.product.id}`}>
        <Card.Img
          src={props.product.img}
          alt={props.product.title}
          variant="top"
        />
      </Link>
      <Card.Body className="px-0">
        <Link to={`/product/${props.product.id}`}>
          <Card.Title as="div">
            <strong>{props.product.title}</strong>
          </Card.Title>
        </Link>
        <h5>${props.product.price}</h5>
        {props.product.quantity > 0 ? 'In Stock' : 'Out Of Stock'}
      </Card.Body>
    </Card>
  );
};

export default Product;
