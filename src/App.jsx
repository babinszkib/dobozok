import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="border">
      Dobozok - App
      <BoxComponent hatterSzin="green" kiindulo={2} />
      <BoxComponent hatterSzin="blue" kiindulo={4} />
      <BoxComponent hatterSzin="red" kiindulo={6} />
    </div>
  )
}

function BoxComponent(props) {
  const [getSzamlalo, setSzamlalo] = useState(props.kiindulo);
  return (
    <div style={{width: "200px" , height: "200px", 
      backgroundColor: props.hatterSzin
    }}
    className = "p-2 m-5 rounded"
    onClick={() => {
      setSzamlalo(getSzamlalo + 1);
    }}>
      <h1> {getSzamlalo} </h1>
    </div>
  );
}

export default App
