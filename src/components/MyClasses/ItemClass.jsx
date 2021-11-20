import React, { useEffect } from 'react'
import { useParams } from 'react-router';
// redux.
import { useSelector, useDispatch } from 'react-redux';
import { setClasses } from '../../redux-toolkit/slices/myClasses';
// styled components
import { Div, Video } from '../../styledComponents/ItemClassStyled';
import { setMyVideos } from '../../redux-toolkit/slices/myVideos';

function ItemClass() {
  const params = useParams();
  // get tge info from the state "my classes"
  const myClasses = useSelector(state => state.myClasses.value);
  const dispatch = useDispatch()
  // function to create a new object
  const addNewObject = elem => {
    if (!myClasses.find(el => el.videoId === elem ) ) {
      dispatch(setClasses([...myClasses, {videoId: elem} ]))
    }
  }
  // add to local storage all data to my claases
  useEffect(() => {
    const data = localStorage.getItem('myClasses');
    if (data !== null) {
      dispatch(setClasses(JSON.parse(data)))
    }
  }, [setClasses, setMyVideos])
  useEffect(() => {
    localStorage.setItem('myClasses', JSON.stringify(myClasses) )
  }, [myClasses])


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