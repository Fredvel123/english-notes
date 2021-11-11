import styled from 'styled-components';

export const Form = styled.form`
  background: #5e5e5e;
  transition: ease-in .5s;
  opacity: ${({open}) => open ? "100%" : "0%" };
  transform: ${({open}) => open ? "translateX()" : "translateX(100%)" } ;
`