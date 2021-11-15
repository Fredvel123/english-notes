import React, { Fragment } from 'react'
// styled components
import { DiccionaryStyled } from '../../styledComponents/DiccionaryStyled'
// redux
import { useSelector, useDispatch } from 'react-redux'

function MyDiccionary() {
  const menu = useSelector(state => state.menu.value);
  const diccionary = useSelector(state => state.diccionary.value);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <DiccionaryStyled state={menu.myDiccionary} >
        <h3>Your Words</h3>
        {diccionary ? 
          diccionary.map(el => (
            <div>
              <p>{el.item[0].word}</p>
              <audio src={el.item[0].phonetics[0].audio} controls ></audio>
            </div>
          )) 
          // we were here
        : null}
      </DiccionaryStyled>
    </Fragment>
  )
}

export default MyDiccionary
