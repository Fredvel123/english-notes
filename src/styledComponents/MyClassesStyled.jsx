import styled from "styled-components";

export const MyClassesStyled = styled.div`
  margin: 4vh 5%;
  margin-bottom: 4vh;
  position: absolute;
  transition: ease-in .3s;
  transform: ${({state}) => state ? "translateX(0%)" : "translateX(500%)" };
`