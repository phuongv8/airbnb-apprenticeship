import React from 'react';
import { Form } from 'react-bootstrap';

const Searchbar = props => {
  return (
    <Form className="d-flex border border-dark rounded-pill mb-3">
      <i className="fa-solid fa-search mt-3 ms-3"></i>
      <Form.Control
        className="shadow-none bg-transparent w-300"
        size="md"
        name="filterTitle"
        type="text"
        placeholder="Search by name or SKU"
        onChange={e => props.setSearchTerm(e.target.value)}
      ></Form.Control>
    </Form>
  );
};

export default Searchbar;
