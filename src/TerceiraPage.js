// Terceiro.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Img } from './componentes/styled_componetes/Img';
import { Div } from './componentes/styled_componetes/Div';
import { Header } from './componentes/Header';
import { ButtonSt } from './componentes/styled_componetes/ButtonSt';
import { P } from './componentes/styled_componetes/P';
import imagem1 from './imgs/photo-lovely-ginger-woman-points-index-finger-aside-demonstrates-promo-right-looks-with-interesting-expression-has-wavy-red-hair.jpg'
import { Main } from './componentes/Main';
import { Sugestoens } from './componentes/Sugestoens';

 function TerceiraPage  ()  {
    const location = useLocation();
    const { product } = location.state || {}; // Obter o produto passado

    if (!product) {
        return <div>Nenhum produto selecionado</div>;
    }

    return (
        <>
            <Header instagram={'20px'} width={'80px'} />
            <Div margin={'5%'}  just={' space-around'}>
                <Img width={'25%'} src={product.image} alt={product.title} />
                <div className='dic'>
                    <h1>{product.title}</h1>
                    <P marginb={'2%'} marginTop={'5%'} align={'start'} size={'25px'}>{`Preço: R$ ${product.price}`}</P>
                    <ButtonSt width={'50%'}  margin={'0'}>Comprar</ButtonSt>
                </div>
            </Div>

            <Sugestoens product={product.category} ide={product.id}></Sugestoens>
            
        </>
    );
};
export default TerceiraPage
