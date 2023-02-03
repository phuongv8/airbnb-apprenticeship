import React from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <>
      <Alert key='success' variant='success'>
        Your order was processed successfully. <Link to='/'>Continue Shopping</Link>
      </Alert>
    </>
  )
}

export default Confirmation;
