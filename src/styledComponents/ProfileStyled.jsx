import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// colors and fonts
import colors from './fonts&colors/colors.json'

export const ProfileDiv = styled.div`
  background: ${colors.dark};
`
export const IconProfile = styled(FontAwesomeIcon)`
  font-size: 85px;
  border-radius: 50%;
  padding: 4px;
  border: 4px solid #009688 ;
`
export const IconEditProfile = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: #009688;
  `
export const Image = styled.img`
  width: 85px;
  height: 85px;
  object-fit: cover;
  border: 2px solid pink;
  border-radius: 50%;
`
