
const Tarjeta = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2>Información Ingresada:</h2>
      <p>Mi Nombre: {input1}</p>
      <p>Mi Equipo de Futbol: {input2}</p>
      <button>Enviar</button>
    </div>
  );
};

export default Tarjeta;
