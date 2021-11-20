import styled from 'styled-components';
// colors and fonts
import colors from './fonts&colors/colors.json'
import fonts from './fonts&colors/fonts.json'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const HomeStartStyled = styled.div`
  width: 90%;
  padding: 0 5%;
  padding-bottom: 5vh;
  position: absolute;
  transition: ease-in-out .3s;
  transform: ${({state}) => state ? "translateX(0)" : "translate(200%)" } ;
  p {
    font-family: ${fonts.letter7};
    padding-bottom: 2vh; 
  }
  @media screen and (max-width: 735px) {
    padding-top: 5vh;
  }
`
export const CardsVideo = styled.div`
  width: 100%;
  background: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  break-inside: avoid;
  border-radius: 2%;
  margin: 0 auto;
  margin-bottom: 2vh;
  img {
    width: 100%;
  }
  h3 {
    font-family: ${fonts.letter2};
    margin:0 5px;
    margin-top: 15px;
  }
  button {
    margin: 15px 0;
    border: none;
    cursor: pointer;
    padding: 2%;
    color: #000;
    background: ${colors.white};
  }
`

export const CardsGallery = styled.div`
  display: inline-block;
  columns: 5 280px;
  text-align: center;
  column-gap: 10px;
  margin: 0 15px;
  @media screen and (max-width: 950px) {
    columns: 5 165px;
  }
  @media screen and (max-width: 450px) {
    columns: 5 320px;
  }
  @media screen and (max-width: 735px) {
    columns: 5 220px;
  }
`
export const Form = styled.form`
  position: relative;
  padding-bottom: 2vh;
  input {
    width: 100%;
    outline: none;
    height: 3.5vh;
    padding: 2vh;
  }
  input:focus{
    border: 2px solid ${colors.pink};
  }
`
export const IconSearch = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${colors.dark};
  position: absolute;
  font-size: 25px;
  top: 2vh;
  right: 3.3%;
  z-index: 100;
`