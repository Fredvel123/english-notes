import styled from "styled-components";
// color and fonts
import colors from './fonts&colors/colors.json'
import fonts from './fonts&colors/fonts.json'

export const MyClassesStyled = styled.div`
  margin: 0 5%;
  margin-bottom: 4vh;
  position: absolute;
  transition: ease-in .3s;
  transform: ${({state}) => state ? "translateX(0%)" : "translateX(1000%)" };
  @media screen and (max-width: 735px) {
    margin-top: 5vh;
  }
  p {
    font-family: ${fonts.letter7};
    padding-bottom: 2vh; 
  }
  h3 {
    margin-top: 5vh;
    font-size: 20px;
    font-family: ${fonts.letter5};
  }
`
export const Cards = styled.div`
  display: inline-block;
  columns: 5 280px;
  text-align: center;
  column-gap: 10px;
  margin: 0 0;
`

export const CardVideo = styled.div`
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
`
export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3vh 0;
  a {
    font-family: ${fonts.letter3};
    background: ${colors.pink};
    color: white;
    padding: .5vh 3%;
    margin-right: 7.5%;
    font-size: 15px;
    transition: ease-in .3s;
    width: 35%;
  }
  a:hover{
    background: ${colors.dark};
  }
  button {
    width: 35%;
    font-family: ${fonts.letter3};
    background: ${colors.pink};
    cursor: pointer;
    color: white;
    border: none;
    padding: .5vh 3%;
    margin-left: 7.5%;
    font-size: 15px;
    transition: ease-in .3s;
  }
  button:hover{
    background: ${colors.dark};
  }
`