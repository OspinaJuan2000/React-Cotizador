import React, { Fragment, useState } from 'react';
import Header from './Components/Header.js';
import Formulario from './Components/Formulario.js';
import Mensaje from './Components/Mensaje.js';
import Resultado from './Components/Resultado.js';
import Spinner from './Components/Spinner.js';

function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;

  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente =
      <Resultado
        cantidad={cantidad}
        plazo={plazo}
        total={total}
      />
  }

  return (
    <Fragment>
      <Header titulo={"Cotizador de prestamos"} />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
