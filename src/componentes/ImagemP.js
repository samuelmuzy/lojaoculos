import React from 'react'
import imagen from '../imgs/oculos.webp'
import { Img } from './Img'
import { Div } from './Div'
import { P } from './styled_componetes/P.js'
import { Card } from './Card.js'


export const ImagemP = (props) =>{
    return(
        <Div pad={'3%'} display={'flex'} direction={'flex'}>
            <Card image={imagen}></Card>
            <Card image={imagen}></Card>
            <Card image={imagen}></Card>
        </Div>
    )
}