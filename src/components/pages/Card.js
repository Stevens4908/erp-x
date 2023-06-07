import React from 'react';
import '../pages/Card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({ name, onClick }) => {
  const handleCardClick = () => {
    onClick(name);
  };

  return (
    <div className=" tarjeta d-flex align-items-center " onClick={handleCardClick}>
        <Container>
            <Row className="">
                <Col className="d-flex justify-content-center">
                <h6 className='text-white '>{name}</h6>
                </Col>
            </Row>
        </Container>
      

    </div>
  );
};

export default Card;