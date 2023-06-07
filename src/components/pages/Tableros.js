import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import log from '../../assets/images/Logo - Vertical Blanco.png'
import '../pages/Tableros.css'

const Tableros = ({ setActiveSection }) => {

  const handleCardClick = (name) => {
    setActiveSection(name.toLowerCase());
  };

    return (


<React.Fragment>
  
<Container>
      <Row>
        <Col>

        <Row className='mb-5'>
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

        <Row>

          <Col>
            <h4 className='text-white'>Tableros</h4>
          </Col>

          <Col>
              <p className='text-white'>Buscar</p>

              <form className="search-form">
                <input type="text" placeholder="Buscar tablero" className="search-input text-white"/>
                
              </form>

          </Col>

        </Row>

        <Row>

            <Col md={3}>

                    <p className='text-white'>Orderar por</p>

                    <select class="custom-select">
                        <option value="" disabled selected>mas activo recientemente</option>
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                    </select>


            </Col>

            <Col md={3}>
                    <p className='text-white'>Filtrar por</p>

                    <select class="custom-select">
                        <option value="" disabled selected>Elegir una colección</option>
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                    </select>
            </Col>

        </Row>

       

        </Col>
      </Row>
    </Container>
    
    
            <div>
                <h6 className='text-white mt-5 mb-3'>Mostrando 3 de 3 tableros</h6>
            </div>
 
        <Container>
          <Row>
              <Col>

                  <Row>

                    <Col md={3}>
                        <div className='nuevo-tablero'>
                                      <h6 className='text-white'>Crear un tablero nuevo</h6>
                          </div>
                    </Col>

                    <Col md={3} className='px-2'>
                          <Cards name="Area Administrativa" onClick={handleCardClick} className="mt-5" ></Cards>
                    </Col>

                    <Col md={3} className='px-2'>
                          <Cards name="Producción y Marketing" onClick={handleCardClick} className="mt-5" ></Cards>
                    </Col>

                    <Col md={3} className='px-2'>
                          <Cards name="Programación" onClick={handleCardClick} className="mt-5" ></Cards>
                    </Col>

                  </Row>

              </Col>
          </Row>
        </Container>

            

            

     
            
</React.Fragment>


    )


}

export default Tableros;