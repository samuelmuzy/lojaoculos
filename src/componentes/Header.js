import React from 'react'
import { HeaderSty } from './styled_componetes/HeaderSty'
import logoo from '../imgs/zarla-solare-1x1-2400x2400-20220210-4r6r343vpg4hp937pp44.webp'
import instagram from '../imgs/instagram (1).png'
import '../App.css';
import { Link } from 'react-router-dom';


export const Header = (props) =>{
    return(
        <HeaderSty display = {props.display}>
            <img width={props.width} src={logoo} alt='nome'/>
            <div className='itens'>
                
            <Link className='p' to={'/'}><p>Home</p></Link>
            <Link className='p' to={'/SecondPage'}><p>Product</p></Link>
                <p className='p'>Inventory</p>
                <p className='p'>Store</p>
            </div>
            <div className='imgs'>
                <img src={instagram} width={props.instagram} alt='intas'/>
                <img src={instagram} width={props.instagram} alt='intas'/>
                <img src={instagram} width={props.instagram} alt='intas'/>
            </div>
           
        </HeaderSty>
        
    )
}