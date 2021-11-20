import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setMyVideos } from '../../redux-toolkit/slices/myVideos'
// styled component
import { Buttons, Cards, CardVideo, MyClassesStyled } from '../../styledComponents/MyClassesStyled';
// react router dom
import { Link } from "react-router-dom";

function MyClasses() {
  const menu = useSelector(state => state.menu.value);
  const myVideos = useSelector(state => state.myVideos.value);
  const dispatch = useDispatch()
  // code to remove the class
  const removeClass = elem => {
    let removeItem = myVideos.filter(item => item.video[0].id.videoId !== elem );
    dispatch(setMyVideos(removeItem))
  }
  
  
  return (
    <MyClassesStyled state={menu.myClasses} >
      <p>Your videos</p>
      {myVideos.length !== 0 ?
        <Cards>
          {myVideos.map(item =>
            <CardVideo>
              <img src={item.video[0].snippet.thumbnails.medium.url} alt="" />
              <h3>{item.video[0].snippet.title}</h3>
              <Buttons>
                <Link to={item.video[0].id.videoId}>watch video</Link>
                <button onClick={() => removeClass(item.video[0].id.videoId)} >remove video</button>
              </Buttons>
            </CardVideo>
          )}
        </Cards>
        : <h3>Don't you have videos yet, add one</h3>}
    </MyClassesStyled>
  )
}

export default MyClasses
