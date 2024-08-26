import React from "react";

export const Detalhes = ({ product }) => {
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
