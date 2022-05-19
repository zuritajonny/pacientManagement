const Error = ({mensaje}) => {
  return (
    <div>
        <div className='my-5 bg-red-800 text-white text-center p-3 font-bold rounded-md uppercase'>
            <p>{mensaje}</p>
            </div>
       </div>
  )
}

export default Error
