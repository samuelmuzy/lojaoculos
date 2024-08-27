import React from 'react'
import imagen from '../imgs/oculos.webp'
import { Div } from './styled_componetes/Div.js'
import { Card } from './Card.js'


export const ImagemP = (props) =>{
    return(
        <Div pad={'3%'} display={'flex'} direction={'flex'}>
            <Card titulo={'Haiban glases'} texto={'R$ 250,00'} imagem={imagen}></Card>
            <Card titulo={'Haiban glases'} texto={'R$ 250,00'} imagem={imagen}></Card>
            <Card titulo={'Haiban glases'} texto={'R$ 250,00'} imagem={imagen}></Card>
        </Div>
    )
}