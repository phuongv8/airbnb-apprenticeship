import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import Product from '../Components/Product';
import Searchbar from '../Components/Searchbar';

const Home = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = products.filter(product => {
    return Object.keys(product).some(key => 
      product[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  })
  
  return (
    <div>
      <Row>
        <Col md={8} className='mt-3'>
          <h4>Shop All Products</h4>
        </Col>
        <Col md={4}>
          <Searchbar setSearchTerm={setSearchTerm}/>
        </Col>
      </Row>

      <Row>
        {filterData.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} key={product.id}>
              <Product product={product} />
            </Col>
          );
        })}
      
        <Col md={3} className='mx-auto my-5'>
          {filterData.length === 0 && <p className='error'>No product matched.</p>}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
