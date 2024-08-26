import { Img } from './Img'
import { Div } from './Div'
import { P } from './styled_componetes/P.js'
export const Card = (props) =>{
    return(

        <Div margin={'3px 20px'} pad = {'2%'} sombra={ 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;;'} width={'15%'} direction={'column'}>
            <Img src={props.image} width={'99%'}/>
            <P>Glases-prt</P>
            <P marginTop={'8px'}>{'R$ 250.99'}</P>
        </Div>
            
       
    )
}