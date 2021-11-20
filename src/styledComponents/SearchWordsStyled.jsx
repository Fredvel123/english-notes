import styled from "styled-components";
// colors and fonts
import colors from './fonts&colors/colors.json'
import fonts from './fonts&colors/fonts.json'
// icon 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Form = styled.form`
  transition: ease-in-out .3s;
  transform: ${({state}) => state ? "translateX(0)" : "translateX(100%)"} ;
  padding: 6vh 5%;
  width: 90%;
  position: ${({state}) => state ? "relative" : "absolute"};
  p {
    font-family: ${fonts.letter7};
    margin-bottom: 3vh;
    color: ${colors.graywhite};
  }
  label {
    width: 90%;
    position: absolute;
    display: flex;
    justify-content: center;
  }
  input {
    width: 100%;
    height: 6vh;
    padding: 0 3%;
    outline: none;
    border: none;
  } 
  input:focus{
    outline: 2px solid ${colors.sky} ;
  }
  button {
    height: 6vh;
    color: #fff;
    background: ${colors.sky};
    border: none;
    width: 26%;
  }
  @media screen and (min-width: 735px) {
    label {
      width: 90%;
    }
    padding-top: 1vh;
  }
`

export const SearchIcon = styled(FontAwesomeIcon)`
  color: ${colors.gray};
  position: absolute;
  font-size: 22px;
  top: 1vh;
  right: 15px;
  z-index: 100;
  cursor: pointer;
  transition: .3s;
  &:hover {
    color: #000;
  }
`

//  cards styles

export const Card = styled.div`
  position: ${({state}) => state ? "relative" : "absolute"};
  transition: ease-in-out .3s;
  transform: ${({state}) => state ? "translateX(0)" : "translateX(-500%)"} ;
  padding: 0 5%;
  padding-top: 6vh;
  audio {
    height: 35px;
    width: 100%;
  }
  audio::-webkit-media-controls-panel{
    transition: ease-out .3s;
    background: ${colors.sky};
    cursor: pointer;
  }
  audio::-webkit-media-controls-panel:hover{
    background: ${colors.gray};
  }
  h2 {
    font-size: 15px ;
    margin: 5px 0;
  }
  h3 {
    text-transform: uppercase;
    font-family: ${fonts.letter2};
    color: ${colors.sky};
  } 
  div {
    padding: 2vh 3%;
    h4 {
      color: ${colors.pink};
      font-family: ${fonts.letter5};
      font-size: 20px;
    }
    p {
      padding-left: 2%;
      font-family: ${fonts.letter3},
    }
  }
`