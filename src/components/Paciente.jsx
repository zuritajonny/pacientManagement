const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


    
    const {nombre, indicaciones, email, fecha, historial, id} = paciente
    
    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar el paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }


  return (
    
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-lg my-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Indicaciones: {""}
            <span className="font-normal normal-case">{indicaciones}</span>
        </p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {""}
            <span className="font-normal normal-case">{fecha}</span>
        </p>


        <p className="font-bold mb-3 text-gray-700 uppercase">Historial: {""}
            <span className="font-normal normal-case">{historial}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button 
                type="button"
                className="py-3 px-10 bg-indigo-600 text-white font-bold uppercase rounded-lg hover:bg-indigo-800 transition-all "
                onClick={() =>setPaciente(paciente)}
            >
                Editar
            </button>

            <button 
                type="button"
                className="py-3 px-10 bg-red-600 text-white font-bold uppercase rounded-lg hover:bg-red-800 transition-all"
                onClick={handleEliminar}
            >
                Eliminar
            </button>
        </div>

    </div>

  )
}

export default Paciente