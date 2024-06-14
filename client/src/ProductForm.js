import React, { useState } from 'react';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar o código para enviar os dados do produto para o back-end
        console.log(product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome do produto:
                <input type="text" name="name" value={product.name} onChange={handleChange} required />
            </label>
            <label>
                Descrição do produto:
                <input type="text" name="description" value={product.description} onChange={handleChange} required />
            </label>
            <label>
                Preço do produto:
                <input type="number" name="price" value={product.price} onChange={handleChange} required />
            </label>
            <label>
                Quantidade em estoque:
                <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
            </label>
            <button type="submit">Cadastrar produto</button>
        </form>
    );
};

export default ProductForm;
