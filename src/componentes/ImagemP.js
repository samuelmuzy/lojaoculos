import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Card } from "./Card";
import { Div } from "./styled_componetes/Div";
import { P } from "./styled_componetes/P";

export const ImagemP = () => {
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
        navigate('/Terceira', { state: { product } });
    };

    if (loading) {
        return <div>Carregando...</div>;
    }


    return (
        <>
            <Div>
            {imagem.filter(img => img.category === "women's clothing")
                    .slice(0,3).map(img => (
                        <Card
                            texto={"R$ " + img.price}
                            titulo={img.title}
                            imH={'35vh'}
                            hei={'50vh'}
                            keys={img.id}
                            imagem={img.image}
                            onClick={() => handleCardClick(img)} 
                            key={img.id}
                        />
                    ))}
            </Div>
            </>
    )
}