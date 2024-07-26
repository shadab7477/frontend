import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductModals = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.name} className="img-fluid" />
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Weight: {product.weight}</p>
        <p>Unit: {product.unit}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModals;
