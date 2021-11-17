import React, { useState, useEffect } from 'react'
// router
import { useParams } from 'react-router';
// redux
import { useSelector } from 'react-redux';

function ItemClass() {
  const params = useParams();
  // redux 
  const myVideos = useSelector(state => state.myVideos.value);
  const [data, setData] = useState([]);

  const lookingForInfo = () => {
    let info = myVideos.find(item => item.video[0].id.videoId === params.id );
    setData(info.video[0]);
    console.log(data)
  }
  useEffect(() => {
    lookingForInfo();
  }, [])
  return (
    <div>
      <h2>hello world from study page!! :) </h2>
      <button onClick={() => console.log(data) } > dsadsadsad </button>
    </div>
  )
}

export default ItemClass;
