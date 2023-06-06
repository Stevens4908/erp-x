import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import cardbg from '../../assets/images/working.jpg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Cards from './Card';
import AreaAdministrativa from './AreaAdministrativa';

const Tableros = ({ setActiveSection }) => {

  const handleCardClick = (name) => {
    setActiveSection(name.toLowerCase());
  };

    return (


<React.Fragment>
  
            <div>
                <h1 className='text-white'>Tableros </h1>
            </div>
 
        
            <Cards name="Area Administrativa" onClick={handleCardClick} className="" >

            </Cards>
            
</React.Fragment>


    )


}

export default Tableros;