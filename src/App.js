import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import Categorias from './context/Categorias';

function App() {
  return (
    <Categorias>
      <Header/>
      <div className="uk-container">
        <Formulario/>
      </div>
    </Categorias>
  );
}

export default App;
