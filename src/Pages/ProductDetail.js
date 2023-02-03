import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Button, 
  Image, 
  ListGroup, 
  Row, 
  Col
} from 'react-bootstrap';

const ProductDetail = ({ addToCart, products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === (id));

  return (
    <>
      <Link className='btn btn-primary my-3' to='/'>Return to Home</Link>
      <Row>
        <Col md={7}>
          <Image 
            src={product.img} 
            alt={product.title} 
            className='img-fluid' 
          />
        </Col>
        <Col md={5} >
          <ListGroup variant='flush'>
            <Row>
              <Col md={8}>
                <ListGroup.Item className='bg-transparent border-0'>
                <h4>{product.title}</h4>
                </ListGroup.Item>
              </Col>
              <Col md={3} xs={7} className='my-2'>{product.sku}</Col>
            </Row>
            <ListGroup.Item 
              className='bg-transparent border-0'>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item 
              className='bg-transparent border-0'>
              {product.quantity > 0 ? `${product.quantity} in stock` : 'Out Of Stock'}
            </ListGroup.Item>
            <ListGroup.Item 
              className='bg-transparent border-0'>
              {product.description}
            </ListGroup.Item>
            <ListGroup.Item 
              className='d-grid bg-transparent border-0'>
              <Button 
                className='btn-dark' 
                type='button' 
                disabled={ product.quantity === 0 }
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
