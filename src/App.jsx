import { useState } from 'react'
import './App.css'


export const App=() => {
  const [count, setCount] = useState(0)

  return (
      <div className='border'>
        Dobozok - App
        <BoxComponent hatterSzin="green" kiindulo={2}></BoxComponent>
        <BoxComponent hatterSzin="blue" kiindulo={4}></BoxComponent>
        <BoxComponent hatterSzin="red" kiindulo={6}></BoxComponent>
      </div>
  )
}

const BoxComponent=({ kiindulo, hatterSzin}) => {
  const[getSzamlalo,setSzamlalo] = useState(kiindulo);
  return(
    <div
    style={{width: "150px", height:"150px",backgroundColor:hatterSzin}}
    className='p-2 m-5 rounded d-flex text-center justify-content-center  align-items-center'
    onClick={() => {
      setSzamlalo(getSzamlalo + 1);
    }}
    >
      <h1> {getSzamlalo} </h1>

    </div>
  );
}

export default App
