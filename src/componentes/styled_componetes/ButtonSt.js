import styled from "styled-components";

export const ButtonSt = styled.button`
    width: ${(props) => props.width  || '15%'};
    height: 5vh;
    margin-left: ${(props) => props.margin || '5%'};
    margin-top: 2%;
    border-radius: 8px;
    background-color: white;
    border: solid 1px #DB8D0F;
    color: #DB8D0F;
    transition: 800ms;
    &:hover{
        color: white;
        background-color: #DB8D0F;
    }
`