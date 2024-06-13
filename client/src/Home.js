import React, {useState} from 'react';
import ProductForm from './ProductForm';
import ModalForm from './ModalForm';

const Home = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>Bem vindo à Loja de Artigos Esportivos</h1>
            <p>Aqui você encontra os melhores itens para teu esporte e lazer.</p>
            <button onClick={handleOpenModal}>Novo Item</button>
            {isModalOpen && <ModalForm onClose={handleCloseModal}/>}
            <ProductForm />
        </div>
    );
};

export default Home;