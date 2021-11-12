import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// colors and fonts
import fonts from './fonts&colors/fonts.json'
import colors from './fonts&colors/colors.json'


export const HomeStyled = styled.div`
  background: ${colors.darkBlue};
  width: 80%;
  height: 100vh;
  transition: ease-in-out .5s;
  @media screen and (max-width: 735px) {
    overflow-x: hidden;
    position: absolute;
    width: 100%;
    transform: ${({state}) => state ? "translateX(60%)" : "translateX(0)" };
    border-radius: ${({state}) => state ? "35px" : "0" } ;
  }
  // header section 
  h2 {
    padding: 0 5%;
    font-family: ${fonts.letter2};
  }
  @media screen and (min-width: 735px) {
    h2 {
      padding: 7vh 5%;
    }
  }
`
// menu section

export const Header = styled.header`
  @media screen and (min-width: 735px) {
    display: none;
  }
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const Icons = styled(FontAwesomeIcon)`
  color: ${colors.graywhite};
  font-size: 27px;
  padding: 7vh 5%;
`