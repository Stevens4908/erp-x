
import './App.css';
import { useState } from 'react';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';


function App() {

  const [logeado , setLogeado] = useState(false)
  const [SeccionActiva , setSeccionActiva] = useState("home")


  const handleLogin = () => {
    setLogeado(true)
  }

  return (
    <div >
      {!logeado ? (
        <Login OnLogin={handleLogin} />  )
          : (
         <Dashboard SeccionActiva={SeccionActiva} setSeccionActiva={setSeccionActiva}  /> )
    }
    </div>
  );
}

export default App;
