import React, {useState} from "react";
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = ({OnLogin}) => {

    const [Email , setEmail] = useState('')
    const [Password , setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Email === "sha" & Password === "1234" ) {
           OnLogin()
        }
        else {
            alert("credenciales incorrectas")
        }

        
    }

return(

<React.Fragment>

<div className="login-container">


     <Container className="">
      <Row className="justify-content-center">
        <Col md={4} className="login py-5 px-3">

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="text" placeholder="Usuario" value={Email} onChange={handleEmailChange}/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="Contraseña" value={Password} onChange={handlePasswordChange}/>
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>

        </Col>
      </Row>
    </Container>

</div>
   
        


</React.Fragment>


)


}

export default Login;