import { BarraLateral } from "./componentes/BarraLateral";
import { Detalhes } from "./componentes/Detalhes";
import { Header } from "./componentes/Header";
import { ImagemP } from "./componentes/ImagemP";
import { Produtos } from "./componentes/Produtos";

function SecondPage(){

    return(
        <>
           <Header instagram={'20px'} width={'80px'}/>
           <BarraLateral></BarraLateral>
           <Produtos></Produtos>
          
        </>
);
}
export default SecondPage;
