import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import log from '../../assets/images/Logo - Vertical Blanco.png'
import '../pages/Card.css'

const Members = () => {

return(

    <Container>
      <Row>
        <Col>

        <Row>
            <Col md={5} className="mt-3">
                <Row>
                    <Col md={2}>
                    <img src={log} class=" img-fluid" alt="..." className="awc" />
                    </Col>
                    <Col md={4}>
                    <h1 className="text-white">Adworkchain</h1>
                    </Col>   
                </Row>
            {/**/}
             
            </Col >
                
            <Col md={5} className="mt-5">
                <p className="text-white">Invitar miembros al espacio de trabajo</p>
            </Col>
        </Row>

        <Row className="mt-5">

            <Col md={3}>
                <h4 className="text-white">Miembros</h4>
                <p className="text-white">miembros de los tableros de los espacios de trabajo</p>
            </Col>

            <Col md={8} className="ms-5">
            <h4 className="text-white">miembros del espacio de trabajo</h4>
            <p className="text-white"> los miembros del espacio de trabajo pueden ver todos los tableros visibles para el Espacio de trabajo, unirse a ellos 
                y crear nuevos tableros en el Espacio de trabajo </p>
            </Col>

        </Row>

        <Row className="mt-3 ">

            <Col md={3}>
                <h4 className="text-white">Miembros del espacio de trabajo (6)</h4>
                <h4 className="text-white my-3">Invitados</h4>
                <h4 className="text-white my-3">Pendientes</h4>
            </Col>

            <Col md={5} className="ms-5">
            <h4 className="text-white">Invite a los miembros a unirse</h4>
            <p className="text-white">Cualquiera que tenga un enlace de invitación puede unirse a este espacio de trabajo</p>
            </Col>

        </Row>

        <Row className="mt-5">
        <form className="search-form">
                <input type="text" placeholder="Filtrar por nombre" className="search-input text-white"/>
                
              </form>
        </Row>

        </Col>
      </Row>
    </Container>

)

}

export default Members