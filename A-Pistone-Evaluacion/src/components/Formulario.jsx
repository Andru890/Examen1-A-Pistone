import { useState } from "react";
import '../App.css'
const Formulario = ({ onSubmit }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

 
    if (input1.trim().length < 3 || /^\s/.test(input1)) {
      setError('El primer input debe tener al menos 3 caracteres y no puede comenzar con espacio en blanco.');
      return;
    }

    
    if (input2.trim().length < 6) {
      setError('El segundo input debe tener al menos 6 caracteres.');
      return;
    }

 
    onSubmit(input1, input2);
   setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      
        <input
          type="text" placeholder="Nombre"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </label>
      <br />
      <label>
        
        <input
          type="text" placeholder="Equipo de Futbol"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Formulario;
