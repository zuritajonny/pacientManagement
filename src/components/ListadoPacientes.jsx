import Paciente from "./Paciente"


function ListadoPacientes({pacientes, setPaciente,eliminarPaciente}){

    
        

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && <pacientes className="length"></pacientes> ? (
                <>
                    <h2 className="font-black text-3xl text-center ">Seguimiento de pacientes</h2>

                    <p className="text-xl mb-10 mt-5 text-center">
                        Administra tus {""}
                        <span  className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( (paciente) =>(

                    <Paciente
                        key={paciente.id} 
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />

                    ))}


                    
                </>


            ) : <>
                   <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>

                    <p className="text-xl mb-10 mt-5 text-center">
                        Agrega tus pacientes {""}
                        <span  className="text-indigo-600 font-bold">apacererán aquí</span>
                    </p>

                </>}

          


        </div>
    )
}
export default ListadoPacientes