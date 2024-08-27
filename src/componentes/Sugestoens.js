import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Div } from "./styled_componetes/Div";
import { Img } from "./styled_componetes/Img";
import { Card } from "./Card";

export const Sugestoens = (props) =>{
    const [imagem,setimg] = useState([]);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products')
        .then(response =>{
            setimg(response.data);
            setLoading(false);
        })
        .catch(error=>{
            setLoading(false);
            console.error(error);
        })
    },[])

    if(loading){
        return <div>Carregando</div>
    }
    const handleCardClick = (product) => {
        navigate('/Terceira', { state: { product } });
    };
    return(
    <Div direction={'column'}>
        <h1 className="suges">Compre também</h1>
        <Div width={'100%'}>
        {imagem.filter(img => img.category === props.product & img.id != props.ide)
                    .map(img => (
                        <Card
                            texto={"R$ " + img.price}
                            titulo={img.title}
                            imH={'35vh'}
                            hei={'50vh'}
                            keys={img.id}
                            imagem={img.image}
                            onClick={() => handleCardClick(img)} 
                            key={img.id}
                        />
                    ))}
        
        </Div>
    </Div>
    )

}