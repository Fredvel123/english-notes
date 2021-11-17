import React, { Fragment, useState } from 'react'
// styled components
import { HomeStyled } from '../../styledComponents/HomeStyled'
// components
import Menu from './Menu'
import SearchWords from '../SerchWords';
import MyDiccionary from '../MyDiccionary';
import HomeStart from '../HomeStart';
import MyClasses from '../MyClasses';
// redux
import {useSelector} from 'react-redux'

function HomePage() {
  const [closeOpenMenu, setcloseOpenMenu] = useState(false);
  const profile = useSelector(state => state.profile.value)

  return (
    <Fragment>
      <HomeStyled state={closeOpenMenu} >
        <Menu state={closeOpenMenu} setState={setcloseOpenMenu} />
        <h2>What's up  {profile.name}</h2> 
        <HomeStart />
        <SearchWords />
        <MyDiccionary />
        <MyClasses />
      </HomeStyled>
    </Fragment>
  )
}

export default HomePage
