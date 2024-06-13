import React from 'react';
import ProductForm from './ProductForm';

const Home = () => {
    return (
        <div>
            <h1>Bem vindo à Loja de Artigos Esportivos</h1>
            <p>Aqui você encontra os melhores itens para teu esporte e lazer.</p>
            <ProductForm />
        </div>
    );
};

export default Home;