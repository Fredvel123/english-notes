import React, { Fragment } from 'react'
// styled components
import { HomeStyled } from '../../styledComponents/HomeStyled';
// components
import Profile from './Profile';
// redux

function Home() {
  // code to close and open the 'add task section'
  return (
    <Fragment>
      <HomeStyled  >
        <Profile />
      </HomeStyled>
    </Fragment>
  )
}
export default Home;
