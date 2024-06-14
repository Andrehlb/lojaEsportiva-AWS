import React, {useState} from 'react';

const ModalForm = () => {
    const [item, setItem] = useState({
        name: '',
    });

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicionar aqui o código para enviar para o back-end
        console.log(item);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome do item:
                <input type="text" name="name" value={item.name}
onChange={handleChange} required />
            </label>
            <button type='submit'>Salvar</button>
        </form>
    );
};

export default ModalForm;