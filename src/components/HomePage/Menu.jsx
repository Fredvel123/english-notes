import React from 'react';
// icons
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
// styled components
import {Header, Icons} from '../../styledComponents/HomeStyled'

function Menu({state, setState} ) {
  const openCloseMenuHandler = () => {
    setState(!state)
  }
  return (
    <>
      <Header>
        <Icons icon={faBars} onClick={openCloseMenuHandler} />
        <Icons icon={faSearch} />
      </Header>           
    </>
  )
}

export default Menu
