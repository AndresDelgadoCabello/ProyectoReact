import React from "react";
import Test from './components/NavBar';
const App = () => {

  const nombre = "julian";
  const saludo = "hola ${nombre}"

  return (
    <div>
      <Test />
    </div>
  )
}

export default App;