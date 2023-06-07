import React, {useState} from 'react'
import Members from '../pages/Members'
import Tableros from '../pages/Tableros'
import Calendario from '../pages/Calendario'
import './Dashboard.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import AreaAdministrativa from '../pages/AreaAdministrativa'
import Produccion from '../pages/Produccion'
import Programacion from '../pages/Programacion'
import user from '../../assets/images/fotox.jpg'

const Dashboard = () => {

    const [activeSection, setActiveSection] = useState('');

    const renderContent = () => {
      switch (activeSection) {
        case 'tableros':
          return <Tableros setActiveSection={setActiveSection}/>;
        case 'miembros':
          return <Members  />;
        case 'calendario':
          return <Calendario />;
        case 'area administrativa':
          return <AreaAdministrativa />;
        case 'producción y marketing':
          return <Produccion />;
          case 'programación':
            return <Programacion />;
        default:
          return null;
      }
    };

    return(


        <React.Fragment>

    

    <div className='dashboard-container'>


                <Navbar bg="light" expand="lg" className='navbar'>

                    <Container>

                        <Navbar.Brand href="#home" className='text-white'>Adworkchain</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-5 ">
                            

                            <NavDropdown title="Espacio de trabajo" id="basic-nav-dropdown" className='custom-dropdown mx-3'>
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" >
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Reciente" id="basic-nav-dropdown" className='custom-dropdown mx-3'>
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" >
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Marcado" id="basic-nav-dropdown" className='custom-dropdown mx-3'>
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" >
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Plantillas" id="basic-nav-dropdown" className='custom-dropdown mx-3'>
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" >
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>

                        <Nav className="ms-auto ">

                            <img
                                alt=""
                                src={user}
                                width="30"
                                height="30"
                                roundedCircle
                                className="d-inline-block align-top rounded-circle "
                                />{' '}

                        </Nav>
                        


                        </Navbar.Collapse>

                    </Container>

                </Navbar>
                

                <div className='content-sidebar-container'>


                    <div className='sidebar-container'>

                        <div className='sidebar'>

                            <ul>

                                <li onClick={() => setActiveSection('tableros')}>Tableros</li>

                                <li onClick={() => setActiveSection('miembros')}>Miembros</li>

                                <li onClick={() => setActiveSection('calendario')}>Calendario</li>

                            </ul>

                        </div>
                    </div>   

                        

                    <div className='content-container'>

                            <div className='content'>

                                        {renderContent()}

                            </div>
                    </div>
                    


                </div>

        

    </div>





        </React.Fragment>


    )

}

export default Dashboard;