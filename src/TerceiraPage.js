// Terceiro.js
import React from 'react';
import { useLocation } from 'react-router-dom';

 function TerceiraPage  ()  {
    const location = useLocation();
    const { product } = location.state || {}; // Obter o produto passado

    if (!product) {
        return <div>Nenhum produto selecionado</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{`Preço: R$ ${product.price}`}</p>
            <p>{product.description}</p>  
        </div>
    );
};
export default TerceiraPage
