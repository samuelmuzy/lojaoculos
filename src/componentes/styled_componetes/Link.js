import styled from 'styled-components';

export const Link = styled.link`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.direction || 'row'};
  padding: ${(props) => props.pad || '0%'};
  width: ${(props) => props.width};
  height: ${(props) => props.hei};
  background-color:${(props) => props.color};
  background-image: url(${(props) => props.imagem});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: ${(props) => props.just || 'center'};
  align-items: ${(props) => props.ali || 'center'};
  border: ${(props) => props.border};
  box-shadow: ${(props) => props.sombra};
  margin: ${(props) => props.margin};
`
