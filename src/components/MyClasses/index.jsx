import React from 'react';
// import ItemClass from './ItemClass';
// redux
import { useSelector } from 'react-redux';
// styled component
import { MyClassesStyled } from '../../styledComponents/MyClassesStyled';
// react router dom
import { Link } from "react-router-dom";

function MyClasses() {
  const menu = useSelector(state => state.menu.value);
  const myVideos = useSelector(state => state.myVideos.value)

  return (
    <MyClassesStyled state={menu.myClasses} >
      <p>this will be the my classes the sections</p>
      <div>
        {myVideos.map(item =>
          // <iframe src={`https://www.youtube.com/embed/${item.video[0].id.videoId}`}  height="100" width="220" frameBorder="0" allowFullScreen  name="demo"></iframe>
          myVideos ?
            <div>
              <img src={item.video[0].snippet.thumbnails.medium.url} alt="" />
              <p>{item.video[0].snippet.title}</p>
              <Link to={item.video[0].id.videoId} >Study this class!</Link>
            </div>
            : <p>No tienes clases aun!</p>
        )}
      </div>
    </MyClassesStyled>
  )
}

export default MyClasses
