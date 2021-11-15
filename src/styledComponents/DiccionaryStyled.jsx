import styled from "styled-components";
// fonts and color
// import colors from './fonts&colors/colors.json'
// import fonts from './fonts&colors/fonts.json'


export const DiccionaryStyled = styled.div`
  position: absolute;
  padding: 2vh 5%;
  transition: ease-in-out .3s;
  transform: ${({state}) => state ? "translateX(0)" : "translateX(500%)"} ;
`