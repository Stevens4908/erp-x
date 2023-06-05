import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Members from '../pages/Members'
import Tableros from '../pages/Tableros'
import Calendario from '../pages/Calendario'
import './Dashboard.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = () => {

    return(


        <Router>

    

            <div className='dashboard-container'>


                <Navbar bg="light" expand="lg" className='navbar'>

                    <Container>

                        <Navbar.Brand href="#home" className='text-white'>Adworkchain</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='custom-dropdown'>
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

                        </Navbar.Collapse>

                    </Container>

                </Navbar>
<div className='content-container'>

 <div className='sidebar'>

                    <ul>
                        <li>
                            <Link to="/dashboard/tableros" >Tableros</Link>
                        </li>

                        <li>
                            <Link to="/dashboard/miembros">Miembros</Link>
                        </li>

                        <li>
                            <Link to="/dashboard/calendario">Calendario</Link>
                        </li>

                    </ul>

                </div>

                <div className='content'>

                    <Routes>

                        <Route path="/dashboard/tableros" element={<Tableros/>}/>
                        <Route path="/dashboard/miembros" element={<Members/>}/>
                        <Route path="/dashboard/calendario" element={<Calendario/>}/>

                    </Routes>

                </div>


</div>
               

            </div>


        </Router>


    )

}

export default Dashboard;