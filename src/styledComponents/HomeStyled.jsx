import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  h1 {
    background: red;
    width: 80%;
    width: 100%;
    height: 100vh;
  }
  @media screen and (max-width: 735px) {
    h1 {
      position: absolute;
      width: 100%;
      z-index: 100;
    }
  }
`