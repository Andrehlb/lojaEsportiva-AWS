import React from 'react';
import ProductForm from './ProductForm';

const Home = () => {
  return (
    <div className="Home">
      <h1>Bem vindo à Loja de Produtos Esportivos</h1>
      <ProductForm /> {/* Renderiza o componente ProductForm */}
    </div>
  );
};

export default App;
