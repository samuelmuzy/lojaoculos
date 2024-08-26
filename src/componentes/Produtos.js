import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card } from "./Card";
import { Div } from "./Div";
import { Detalhes } from "./Detalhes";

export const Produtos = () => {
    const [imagem, setImagem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setImagem(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    }, []);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Div>
                {imagem.slice(0, 4).map(img => (
                    <Card
                        key={img.id}
                        texto={"R$ " + img.price}
                        titulo={img.title}
                        imH={'35vh'}
                        hei={'50vh'}
                        imagem={img.image}
                        onClick={() => handleCardClick(img)} // Passando o objeto completo
                    />
                ))}
            </Div>
            <Div>
                {imagem.slice(4, 8).map(img => (
                    <Card
                        key={img.id}
                        texto={"R$ " + img.price}
                        titulo={img.title}
                        imH={'35vh'}
                        hei={'50vh'}
                        imagem={img.image}
                        onClick={() => handleCardClick(img)}
                    />
                ))}
            </Div>
            <Div>
                {imagem.slice(8, 12).map(img => (
                    <Card
                        key={img.id}
                        texto={"R$ " + img.price}
                        titulo={img.title}
                        imH={'35vh'}
                        hei={'50vh'}
                        imagem={img.image}
                        onClick={() => handleCardClick(img)}
                    />
                ))}
            </Div>

            {selectedProduct && <Detalhes product={selectedProduct} />}
        </>
    );
};
