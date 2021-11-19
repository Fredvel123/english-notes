import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setClasses } from '../../redux-toolkit/slices/myClasses';
// styled component
import { MyClassesStyled } from '../../styledComponents/MyClassesStyled';
// react router dom
import { Link } from "react-router-dom";

function MyClasses() {
  const menu = useSelector(state => state.menu.value);
  const myVideos = useSelector(state => state.myVideos.value);
  const myClasses = useSelector(state => state.myClasses.value);
  const dispatch = useDispatch()
  
  
  return (
    <MyClassesStyled state={menu.myClasses} >
      <p>this will be the my classes the sections</p>
      <div>
        {myVideos.map(item =>
          myVideos ?
            <div>
              <img src={item.video[0].snippet.thumbnails.medium.url} alt="" />
              <p>{item.video[0].snippet.title}</p>
              <Link to={item.video[0].id.videoId}>study this class</Link>
            </div>
            : <p>No tienes clases aun!</p>
        )}
      </div>
    </MyClassesStyled>
  )
}

export default MyClasses
