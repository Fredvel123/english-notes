import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const colors={
    exit: "#39e642",
    error: "#e72424"
}

export const IconsStyled = styled(FontAwesomeIcon)`
  color: ${({state}) => state ? colors.exit : colors.error };
  display: ${({state}) => state === null ? "none" : "block" };
`
export const InputStyled = styled.input`
  &:focus {
    outline: none;
    border: 2px solid ${({state}) => state ? colors.exit : colors.error };
  }
`