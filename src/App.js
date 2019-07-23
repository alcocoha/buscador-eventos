import React from 'react';
import Header from './components/Header';
import Categorias from './context/Categorias';
function App() {
  return (
    <Categorias>
      <Header/>
    </Categorias>
  );
}

export default App;
