import React from 'react'
import { Img } from './styled_componetes/Img'
import imagem1 from '../imgs/sunset-1283872_960_720.jpg'
import { Div } from './styled_componetes/Div'
import { P } from './styled_componetes/P'



export const ImagemOculos = () =>{
    return(
        <Div>
            <Div ali={'flex-start'} just={'center'} display={'flex'} direction={'column'} hei= {'85vh'} width = {'100%'}>
                <P bold={'400'} margin = {'10%'} color={'black'} size={'220%'}>O verão vem com força e com novas emoções </P>
                <P margin = {'10%'} color={'#EBDB00'} size = {'160%'}>Os melhores oculos venha Com Solare</P>
            </Div>
            <Img margin={'10%'} width={'40%'} src={imagem1} ></Img>
        </Div>
    )
}