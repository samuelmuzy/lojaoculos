import React,{useEffect,useState} from "react";
import axios from "axios";
import { Div } from "./styled_componetes/Div";
import { P } from "./styled_componetes/P";

export const Detalhes = () => {
    
    const [imagem, setImagem] = useState([]);

    const [loading, setLoading] = useState(true);
     // useNavigate em vez de useHistory

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setImagem(response.data);
                
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            });
    }, []);
    if(loading){
        alert('ola')
    }

    return (
        <Div margin={'2% 1% 2% 1%'} border={'solid 1px black'} hei={'100%'}  ali={'start'} just={'flex-start'} direction={'column'}>
            <P size={'30px'}>Categorias</P>
            <P size={'15px'}>ola</P>
            <P size={'25px'}>ola</P>
        </Div>
            
        
    );
};
