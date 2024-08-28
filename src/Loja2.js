import { Header } from './componentes/Header';
import { ImagemOculos } from './componentes/ImagemOculos';
import { ImagemP } from './componentes/ImagemP';
import { ImgMaiores } from './componentes/ImgMaiores';
import { Main } from './componentes/Main';

function Loja2(){

    return(
        <>
            <Header instagram={'20px'} width={'80px'} />
            <Main></Main>
            <h2 className='texto'>Estilos para o Verão</h2>
            <ImgMaiores></ImgMaiores>
            <h2 className='texto'>Principais Produtos</h2>
            <ImagemP></ImagemP>
            <ImagemOculos></ImagemOculos>
        </>
);
}
export default Loja2;
