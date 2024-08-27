import React from 'react';
import imagemMenor1 from '../imgs/metal-os.webp'
import imagemMenor2 from '../imgs/w31-Armacao-de-oculos-fina-com-quem-combina-modelos-e-indicacoespara-voce.webp'
import imagem3 from '../imgs/oculos-de-sol-viva-la-vida-ods015-importe-go-142074.jpg'
import { Div } from './styled_componetes/Div';

export const ImgMaiores = () =>{
    return(
        <Div pad={'4%'} display={'flex'} direction={'row'}>
            <img src={imagem3} width={'490px'} alt='imm' />
        
        <Div pad={'0px 20px'} display={'flex'} direction={'column'}>
            <img src={imagemMenor1} width={'450px'} alt='iim' />
            <img src={imagemMenor2} width={'450px'} alt='im' />
        </Div>
      </Div>
       
    )
}