import { Img } from './Img';
import { Div } from './Div';
import { P } from './styled_componetes/P.js';

export const Card = (props) => {
    return (
        <Div
            hei={props.hei}
            margin={'13px 20px'}
            pad={props.pad || '2%'}
            sombra={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}
            width={'15%'}
            direction={'column'}
            onClick={props.onClick} // Adicionando o evento onClick
            style={{ cursor: 'pointer' }} // Adicionando cursor de pointer ao passar o mouse
        >
            <Img marB={'50px'} height={props.imH} key={props.keys} src={props.imagem} width={'99%'} />
            <P marginTop={'8px'}>{props.titulo}</P>
            <P size={'20px'} marginTop={'8px'}>{props.texto}</P>
        </Div>
    );
};
