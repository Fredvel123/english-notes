import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// colors and fonts
import colors from './fonts&colors/colors.json'
import fonts from './fonts&colors/fonts.json'

const colorsInput={
  exit: "#39e642",
  error: "#e72424"
}

// ---- Log in section ----
export const Form = styled.form`
  height: 100vh;
  padding: 0 15%;
  background: ${colors.darkBlue} ;
  color: ${colors.white};
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  /* align-items: center; */
  button {
    margin: 7vh 0;
    width: 100%;
    height: 7vh;
    transition: ease-in .2s;
    cursor: pointer;
    background: ${colors.pink};
    border: none;
    border-radius: 10px;
    color: ${colors.white};
    font-size: 20px;
  }
  button:hover {
    background: ${colors.sky};
  }
  h1 {
    margin-bottom: 2vh;
    text-align: center;
    font-family: ${fonts.letter5};
  }
  @media screen and (max-width: 425px ){
    padding: 0 3%;
  }
`

// --- Input section ---
export const BoxInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #fff;
    margin-left: 1.5%;
    font-family: ${fonts.letter2};
  }
`
export const InputIcon = styled.div`
  margin: 2vh 0;
  position: relative;
`

export const IconsStyled = styled(FontAwesomeIcon)`
  color: ${({state}) => state ? colorsInput.exit : colorsInput.error };
  display: ${({state}) => state === null ? "none" : "block" };
  position: absolute;
  bottom: 2.5vh;
  right: 2.5%;
  width: 16px;
  transition: ease-in .1s;
  height: 16px;
  font-size: 16px !important ;
  z-index: 100;
`
export const InputStyled = styled.input`
  width: 97%;
  font-weight: 500;
  font-family: ${fonts.letter1};
  height: 5vh;
  color: #fff;
  border-radius: 10px;
  border: 1px solid ${colors.dark};
  background: ${colors.dark};
  transition: ease-in .1s;
  padding: 1vh 1.5%;
  &:focus {
    outline: none;
    border: 2px solid ${({state}) => state ? colorsInput.exit : colorsInput.error };
  }
  &::placeholder{
    font-size: 15px;
    color: #ffffffa0;
  }
`
// imput image
export const BoxInput = styled.div`  
  display: flex;
  justify-content: center;
  label {
    margin-top: 1vh;
    background: ${({state}) => state !== null ? colors.sky : colors.dark };
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    color: #fff;
    margin-left: 1.5%;
    font-family: ${fonts.letter2};
    cursor: pointer;
    transition: ease-in .3s;
  }
  label:hover {
    background: ${colors.gray};
  }
  input {
    display: none;
  }
`