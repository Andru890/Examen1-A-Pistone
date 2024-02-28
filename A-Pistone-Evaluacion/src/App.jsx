
import { useState } from 'react';
import Formulario from './components/Formulario';
import Tarjeta from './components/Tarjeta';
import './App.css'

const App = () => {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (input1, input2) => {
    if (input1.trim().length < 3 || input2.trim().length < 6) {
      setError('Por favor, verifica que la información sea correcta.');
    } else {
      setFormData({ input1, input2 });
      setError('');
    }
  };

  return (
    <div>
      <h1>Formulario de Equipos de Futbol</h1>
      <Formulario onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {formData && <Tarjeta {...formData} />}
    </div>
  );
};

export default App;