import { useState, useEffect} from 'react'
import Header from "./components/Header" 
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
  const initialPush = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(initialPush);
  const [paciente, setPaciente] = useState({});

 /*  useEffect(() => {
    const obtenerLS = () =>{
      const pacientesLS  = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS)
    }

    obtenerLS()

  }, []) */
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))

  }, [pacientes])

  //Este es un nuevo comentario para el test de updates de git

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  return (
    <div className="container mx-auto mt-20">
      
       <Header/>
      <div className="container md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        
        />
        
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        /> 
      </div>
 
    </div>
  )
}

export default App
