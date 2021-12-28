import React from 'react'
import { useParams } from 'react-router';
// redux.
import { useSelector, useDispatch } from 'react-redux';
import { setMyVideos } from '../../redux-toolkit/slices/myVideos';
// styled components
import { Div, Video } from '../../styledComponents/ItemClassStyled';

function ItemClass() {
  const params = useParams();
  // get tge info from the state "my classes"
  const myVideos = useSelector(state => state.myVideos.value);
  const dispatch = useDispatch()
  // function to create a new object
  const addNewObject = elem => {
    // if (!myVideos.find(el => el.video[0].id.videoId === elem ) ) {
    // }
    dispatch(setMyVideos([...myVideos, {videoId: elem}]));
  }
  return (
    <Div>
      <Video
        src={`https://www.youtube.com/embed/${params.id}`}  
        height="100" 
        width="220" 
        frameBorder="0" 
        allowFullScreen  
        name="demo">
      </Video>      
      <button onClick={() => addNewObject(params.id)} >Add new video</button>
    </Div>
  )
}

export default ItemClass;