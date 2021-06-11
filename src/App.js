import { useState } from "react";
import { Boton } from "./componentes/Boton";
import { Input } from "./componentes/Input";

function App() {
  const [numero, setNumero] = useState(0);
  const incrementa = () => {
    if (numero === 10) {
      return;
    }
    setNumero(numero + 1);
  };
  const decrementa = () => {
    if (numero === 0) {
      return;
    }
    setNumero(numero - 1);
  };
  return (
    <div className="contenedor">
      <Boton texto="-" accion={decrementa} />
      <Input numero={numero} />
      <Boton texto="+" accion={incrementa} />
    </div>
  );
}

export default App;
