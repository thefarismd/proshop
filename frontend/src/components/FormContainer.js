import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FormContainer(props) {
  return (
    <Container>
      <Row className='justfiy-content-md-center'>
        <Col xs={12} md={6}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
