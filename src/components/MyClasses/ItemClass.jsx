import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
// redux.
import { setClasses } from '../../redux-toolkit/slices/myClasses';
import { useSelector, useDispatch } from 'react-redux';
// react router.
import { Link } from 'react-router-dom'


function ItemClass() {
  const params = useParams();
  const myClasses = useSelector(state => state.myClasses.value);
  const dispatch = useDispatch()
  const addDataToMyClass = (id) => {
    if (!myClasses.find(item => item.videoId === id ) ) {
      dispatch(setClasses([...myClasses, {videoId: id, title: "there's not title"} ]))
    }
  }
  const [data, setData] = useState([])
  const getDataFromMyClass = () => {
    let info = myClasses.filter(el => el.videoId === params.id );
    setData(info[0]);
  }
  useEffect(() => {
    addDataToMyClass(params.id);
    getDataFromMyClass();
  }, [])
  // code to the input
  const [input, setInput] = useState("");
  const handlerInput = e => {
    setInput(e.target.value);
  }
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(setClasses(myClasses.map(item => item.videoId === params.id ?  {title: input, videoId: params.id} : item )))
    getDataFromMyClass();
  }
  // local storage.
  useEffect(() => {
    let data = localStorage.getItem('myClasses');
    if (data !== null) {
      dispatch(setClasses(JSON.parse(data)));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('myClasses', JSON.stringify(myClasses) )
  }, [myClasses])
  return (
    <div>
      <header>
        <h1>{data ? data.title : null}</h1>
        <Link to="/" > back </Link>
        <button onClick={ () => addDataToMyClass(params.id)} >dasda</button>
      </header>

      <iframe 
        src={`https://www.youtube.com/embed/${params.id}`}  
        height="100" 
        width="220" 
        frameBorder="0" 
        allowFullScreen  
        name="demo">
      </iframe>
      <form onSubmit={handlerSubmit}>
        <input 
          type="text"
          value={input}
          onChange={handlerInput} />
          <button>edit</button>
      </form>
    </div>
  )
}

export default ItemClass;