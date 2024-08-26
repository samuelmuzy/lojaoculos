import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Card } from "./Card";
import { Div } from "./Div";

export const Produtos = () => {
    const [imagem, setImagem] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // useNavigate em vez de useHistory

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
        // Navega para a rota /terceiro passando o id do produto
        navigate('/Terceira', { state: { product } });
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Div>
                {imagem.slice(0, 4).map(img => (
                    <Card
                        texto={"R$ " + img.price}
                        titulo={img.title}
                        imH={'35vh'}
                        hei={'50vh'}
                        keys={img.id}
                        imagem={img.image}
                        onClick={() => handleCardClick(img)} // Passa o produto clicado
                        key={img.id}
                    />
                ))}
            </Div>
            <Div>
                {imagem.slice(4, 8).map(img => (
                    <Card
                        texto={"R$ " + img.price}
                        titulo={img.title}
                        imH={'35vh'}
                        hei={'50vh'}
                        keys={img.id}
                        imagem={img.image}
                        onClick={() => handleCardClick(img)} // Passa o produto clicado
                        key={img.id}
                    />
                ))}
            </Div>
            <Div>
                {imagem.slice(8, 12).map(img => (
                    <Card
                        texto={"R$ " + img.price}
                        titulo={img.title}
                        imH={'35vh'}
                        hei={'50vh'}
                        keys={img.id}
                        imagem={img.image}
                        onClick={() => handleCardClick(img)} // Passa o produto clicado
                        key={img.id}
                    />
                ))}
            </Div>
        </>
    );
};
