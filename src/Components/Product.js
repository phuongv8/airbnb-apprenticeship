import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3'>
      <Link to={`/product/${product.id}`}>
        <Card.Img 
          src={product.img} 
          alt={product.title}
          variant='top' 
        />
      </Link>
      <Card.Body className='px-0'>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>
        <h5>${product.price}</h5>
        {product.quantity > 0 ? 'In Stock' : 'Out Of Stock'}
      </Card.Body>
    </Card>
  )
}

export default Product;