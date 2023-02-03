import React from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminHome = ({ products, setProducts }) => {
  const deleteButton = (product) => {
    setProducts(products.filter((item) => item.id !== product.id));
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h4>Inventory</h4>
        </Col>
        <Col md={3}>
          <Link to="/add">
            <Button className='my-3 ms-5'>
              <i className='fas fa-plus'></i> Add Product
            </Button>
          </Link>
        </Col>
      </Row>
      <>
        <Table striped bordered hover className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.sku}</td>
                <td>{product.title}</td>
                <td>$ {product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link to="/edit"><Button 
                    variant='light'
                    className='btn-sm me-2'
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button></Link> 
                  <Button
                    variant='dark'
                    className='btn-sm'
                    onClick={() => deleteButton(product)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  );
};

export default AdminHome;
