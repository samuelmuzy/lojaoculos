import styled from 'styled-components'

export const P =  styled.p`
    text-align: ${(props) => props.align || 'center'};
    font-size:  ${(props) => props.size};
    color:  ${(props) => props.color};
    margin-left:${(props) => props.margin};
    margin-top:${(props) => props.marginTop};
    font-weight: ${(props) => props.bold};
    
`