import React, { Fragment, useEffect ,useState } from 'react'

function HomeStart() {
  const [videos, setVideos] = useState([])
  // code to get the youtube api.
  const API_KEY = "AIzaSyCCmbiw7fhBzZ3-sDdEafbMuOKl0wVR7JE";
  const VIDEO = "jose madero"
  const getYoutubeApi = async () => {
    const URL_API = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${VIDEO}&key=${API_KEY}`)
    const RES_API = await URL_API.json();
    setVideos(RES_API.items)
    console.log(videos); 
  }
  useEffect(() => {
    getYoutubeApi();
  }, [])
  return (
    <Fragment>
      <h1>This will be the home page section!</h1>            
      {/* <button onClick={() => getYoutubeApi() } >Jose Madero</button> */}
      {videos ? 
        videos.map(item => (
            <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`}  height="325" width="400" frameBorder="0" allowFullScreen  name="demo"></iframe>
        ) )
      : null}

    </Fragment>
  )
}

export default HomeStart
