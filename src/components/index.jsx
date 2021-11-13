import React, { Fragment } from 'react'
// components
import HomePage from './HomePage';
import Profile from './Profile';
// styled components
import styled from 'styled-components';
const HomeStyled = styled.div`
  display: flex;
  overflow-y: hidden;
`

function Home() {
  return (
    <Fragment>
      <HomeStyled >
        <Profile />
        <HomePage />
      </HomeStyled>
    </Fragment>
  )
}
export default Home;
