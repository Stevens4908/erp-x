import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import cardbg from '../../assets/images/working.jpg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Tableros = () => {

    return (


<React.Fragment>

   

<div>
    <h1 className='text-white'>Tableros </h1>
</div>


<Card style={{ width: '18rem' }} className='cardbg'>
      <Card.Body>
        <Card.Title className='text-white'>Crear Nuevo tablero</Card.Title>
       
        <Card.Text className='text-white'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">
            <Link to="/dashboard/tableros/areaadministrativa">
            Card Link
            </Link>
            
        </Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>


    





</React.Fragment>


    )


}

export default Tableros;