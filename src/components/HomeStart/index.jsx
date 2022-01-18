import React, { useEffect , useState } from 'react';
// styled components
import { CardsGallery, CardsVideo, Form, HomeStartStyled, IconSearch } from '../../styledComponents/HomeStartStyled';
// redux
import { useSelector, useDispatch } from 'react-redux';
import {setMyVideos} from '../../redux-toolkit/slices/myVideos'
// icons 
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function HomeStart() {
  const menu = useSelector(state => state.menu.value);
  // code to get the youtube api.
  const [videos, setVideos] = useState([])
  // const API_KEY = "AIzaSyCCmbiw7fhBzZ3-sDdEafbMuOKl0wVR7JE";
  // const API_KEY2 = "AIzaSyCwF0L-rPume6jvXSs1k7d63yQlahZ38WY"
  const getYoutubeApi = async (VIDEO) => {
    const URL_API = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${VIDEO}&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
    const RES_API = await URL_API.json();
    setVideos(RES_API.items)
  }
//   useEffect(() => {
//     getYoutubeApi(video);
//   }, [])
  // code to search videos
  const [input, setInput] = useState("");
  const handlerInput = e => {
    setInput(e.target.value);
  }
  // code to submit the form.
  const handlerSubmit = e => {
    e.preventDefault();
    getYoutubeApi(input);
    setInput("");
    console.log(process.env);
  }   
  // code to add videos to an state global.
  const myVideos = useSelector(state => state.myVideos.value);
  const dispatch = useDispatch()  
  const addToVideos = el => {
    let video = videos.filter(item => item.snippet.title === el );
    if (!myVideos.find(i => i.video[0].etag === video[0].etag ) ) {
      dispatch(setMyVideos([...myVideos, {video}]))
    }
    console.log(myVideos);
  }
  // useLocalStorage.
  useEffect(() => {
    let data = localStorage.getItem('myVideos');
    if (data !== null) {
      dispatch(setMyVideos(JSON.parse(data)))
    }
  }, [dispatch])
  useEffect(() => {
    localStorage.setItem('myVideos', JSON.stringify(myVideos))
  }, [myVideos])
  
  return (
    <HomeStartStyled state={menu.home} >
      <p>Home</p>            
      <Form onSubmit={handlerSubmit} >
        <label>
          <input 
            type="text"
            autocomplete="off"
            value={input}
            spellcheck="false"
            onChange={handlerInput}
            required
            placeholder="Search any video from Youtube" />
          <IconSearch icon={faSearch} onClick={handlerSubmit} />
        </label>
      </Form>
        {videos ? 
          <CardsGallery>
          {videos.map(item => 
              item.id.videoId ?
                <CardsVideo>
                  <img src={item.snippet.thumbnails.medium.url} alt="" />
                  <h3>{item.snippet.title}</h3>
                  <button onClick={() => addToVideos(item.snippet.title)} >Add to my classes</button>
                </CardsVideo>
              : null)}
          </CardsGallery>
        : <h2>no videos</h2> }

    </HomeStartStyled>
  )
}

export default HomeStart
