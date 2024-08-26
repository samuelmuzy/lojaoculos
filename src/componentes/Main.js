import React from 'react'
import imagem1 from '../imgs/outdoor-portrait-pretty-blond-woman-wearing-orange-glasses-with-backpack.jpg'
import { Div } from './Div'
import { P } from './styled_componetes/P'
import { Button } from './Button'
import { Link } from 'react-router-dom'


export const Main = () =>{
    return(
        <Div ali={'flex-start'} just={'center'} display={'flex'} direction={'column'} imagem={imagem1} hei= {'85vh'} width = {'100%'}>
            <P bold={'400'} margin = {'5%'} color={'#FFFFFF'} size={'250%'}>Descubra novas modas de verão</P>
            <P margin = {'5%'} color={'white'} size = {'220%'}>Grande inovação em moda</P>
            <Button></Button>
        </Div>
    )
}