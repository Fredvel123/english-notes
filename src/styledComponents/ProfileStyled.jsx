import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// colors and fonts
import colors from './fonts&colors/colors.json'
import fonst from './fonts&colors/fonts.json'

export const ProfileDiv = styled.div`
  background: ${colors.darkBlue};
  position: fixed;
  width: 20%;
  height: 100vh !important;
  padding-top: 9vh;
  padding-left: 2%;
  nav {
    padding-top: 5vh;
  }
  @media screen and (max-width: 735px) {
    width: 100%;
    padding-top: 7vh;
    padding-left: 5%;
  }
`
export const DataBox = styled.div`
  h2 {
    font-size: 35px;
    letter-spacing: 1%;
    font-family: ${fonst.letter2};
  }
`

export const IconProfile = styled(FontAwesomeIcon)`
  font-size: 65px;
  border-radius: 50%;
  padding: 4px;
  margin-bottom: 25px;
  border: 4px solid ${colors.pink} ;
`
export const IconEditProfile = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: ${colors.pink};
  cursor: pointer;
  &:hover {
    color: ${colors.pink};
  }
`

export const Image = styled.img`
  width: 85px;
  height: 85px;
  object-fit: cover;
  border: 2px solid pink;
  border-radius: 50%;
`
export const Div = styled.div`
  display: flex;
  margin: 2vh 0;
  align-items: center;
  p {
    font-family: ${fonst.letter1};
    cursor: pointer;
  }
  p:hover {
    color: #918f8f;
  }
  #p1 {
    margin-left: 4%;
  }
  #p2 {
    margin-left: 4.4%;
  }
  #p3 {
    margin-left: 4.4%;
  }
  #p4 {
    margin-left: 4%;
  }
  @media screen and (max-width: 735px) {
    margin: 4vh 0;
  }
`