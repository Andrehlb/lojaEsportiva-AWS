import React from 'react';
import ProductForm from './Home';

const App = () => {
  return (
    <div className="Loja">
      <h1>Bem vindo à Loja de Produtos Esportivos</h1>
      <Home /> {/* Renderiza o componente ProductForm */}
    </div>
  );
};

export default App;
