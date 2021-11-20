import React, { useEffect } from 'react';
// icons
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
// styled components
import {Header, Icons} from '../../styledComponents/HomeStyled'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../../redux-toolkit/slices/menu';



function Menu({state, setState} ) {
  const menu = useSelector(state => state.menu.value);
  const dispatch = useDispatch();

  const openCloseMenuHandler = () => {
    setState(!state)
  }
  useEffect(() => {
    if (state === true) {
      setState(false)
    }
    // eslint-disable-next-line
  }, [menu]);
  // 
  const handlerSearchWords = () => {
    dispatch(setMenu( {
      home: false,
      myDiccionary: false,
      newWords: false,
      searchWords: true} ))
  }
  return (
    <>
      <Header>
        <Icons icon={faBars} onClick={openCloseMenuHandler} />
        <Icons icon={faSearch} onClick={handlerSearchWords} />
      </Header>           
    </>
  )
}

export default Menu
