import {useState, useEffect} from 'react';
import Error from "./Error"

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');  
  const [indicaciones, setIndicaciones] = useState('');  
  const [email, setEmail] = useState('');  
  const [fecha, setFecha] = useState('');  
  const [historial, setHistorial] = useState('');  

  const [error, setError] = useState(false)

 useEffect( () =>{
        if( Object.keys(paciente).length>0){
          setNombre(paciente.nombre)
          setIndicaciones(paciente.indicaciones)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setHistorial(paciente.historial)
        }
        
    }, [paciente])


  


  const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    //validando el formulario
    if( [nombre, indicaciones, email, fecha, historial].includes('') ){
      setError(true)
      return
    }

    setError(false)
    
    const objectoPaciente = {
      nombre, 
      indicaciones, 
      email, 
      fecha, 
      historial,
  
    }

    if(paciente.id){
      //Editando el registro
      objectoPaciente.id = paciente.id;
      
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objectoPaciente: pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})


    }else{
      //Nuevo registro
      objectoPaciente.id = generarId();
      setPacientes([...pacientes, objectoPaciente]);
    }


    
    
    setNombre('')
    setIndicaciones('')
    setEmail('')
    setFecha('')
    setHistorial('')

  }
  

  return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h1 className="font-black text-3xl text-center">Seguimiento de pacientes</h1>

        <p className="text-xl mt5-5 mt-5 text-center mb-10">
          Añade pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre"
            >
              Nombre del paciente
            </label>

            <input 
              id="nombre"
              type="text" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="¿Cual es el nombre del paciente?"
              value={nombre}
              onChange={(e) => setNombre(e.target.value  )}
            />
          </div>



          <div className="mb-5">
            <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="indicaciones"
            >
              Indicaciones medicas
            </label>

            <input 
              id="nombre"
              type="text" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="¿Cuales son sus sintomas?"
              value={indicaciones}
              onChange={(e) => setIndicaciones(e.target.value  )}
            />
          </div>


          <div className="mb-5">
            <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
            >
              Email
            </label>

            <input 
              id="email"
              type="text" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="¿Cual es su email o de algun familiar?"
              value={email}
              onChange={(e) => setEmail(e.target.value  )}
            />
          </div>

          <div className="mb-5">
            <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
            >
              Fecha de alta
            </label>

            <input 
              id="alta"
              type="date" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="¿Cuando recibio el alta el paciente?"
              value={fecha}
              onChange={(e) => setFecha(e.target.value  )}
            />
          </div>

          <div className="mb-5">
            <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
            >
              Historial del paciente
            </label>

            <textarea 
              id="historia"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="¿Cuales son sus condiciones previas?"
              value={historial}
              onChange={(e) => setHistorial(e.target.value)}
            />
          </div>

          <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all"
          value={paciente.id ? 'Guardar cambios' : 'Agregar Paciente'}
          />
          {error && <Error mensaje='Debes llenar todos los campos!'/> }

        </form>
      </div>
 )
}

export default Formulario