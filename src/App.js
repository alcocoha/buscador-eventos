import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import Eventos from './context/Eventos';
import Categorias from './context/Categorias';
import ListaEventos from './components/ListaEventos';

function App() {
  return (
    <Fragment>
      <Header/>

      <div className="uk-container">
        <Eventos>
          <Categorias>
            <Formulario/>
          </Categorias>
          <ListaEventos/>
        </Eventos>
      </div>
    </Fragment>
  );
}

export default App;
