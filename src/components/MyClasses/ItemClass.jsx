import React from 'react'
import { useParams } from 'react-router';
// redux.
// import { setClasses } from '../../redux-toolkit/slices/myClasses';
// import { useSelector, useDispatch } from 'react-redux';
// react router.
// import { Link } from 'react-router-dom'
import { Div, Video } from '../../styledComponents/ItemClassStyled';
// styled components

function ItemClass() {
  const params = useParams();
  // const myClasses = useSelector(state => state.myClasses.value);
  // const dispatch = useDispatch()
  // const addDataToMyClass = (id) => {
  //   if (!myClasses.find(item => item.videoId === id ) ) {
  //     dispatch(setClasses([...myClasses, {videoId: id} ]))
  //   }
  // }
  // const [data, setData] = useState([])
  // const getDataFromMyClass = () => {
  //   let info = myClasses.filter(el => el.videoId === params.id );
  //   setData(info[0]);
  // }
  // useEffect(() => {
  //   addDataToMyClass(params.id);
  //   getDataFromMyClass();
  // }, [])
  // // code to the input
  // const [input, setInput] = useState({
  //   word: "",
  //   description: "",
  //   sentence: ""
  // });
  // const handlerInput = e => {
  //   const {name, value} = e.target;
  //   setInput(prevInput => ({
  //     ...prevInput,
  //     [name] : value
  //   }) );
  // }
  // const handlerSubmit = e => {
  //   e.preventDefault();
  //   dispatch(setClasses(myClasses.map(item => item.videoId === params.id ? {videoId: params.id, notes: {word: input.word, description: input.description } }  : item )))
  //   // dispatch(setClasses(myClasses.map(item => item.videoId === params.id ?  {videoId: params.id, notes: {...item.notes, sentences: {sentence: input.sentence} }  } : item )))
  //   getDataFromMyClass();
  // }
  // // local storage.
  // useEffect(() => {
  //   let data = localStorage.getItem('myClasses');
  //   if (data !== null) {
  //     dispatch(setClasses(JSON.parse(data)));
  //   }
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('myClasses', JSON.stringify(myClasses) )
  // }, [myClasses])
  return (
    <Div>
      {/* <header>
        <h1>{data ? data.title : null}</h1>
        <Link to="/" > back </Link>
        <button onClick={ () => addDataToMyClass(params.id)} >dasda</button>
      </header> */}

      <Video
        src={`https://www.youtube.com/embed/${params.id}`}  
        height="100" 
        width="220" 
        frameBorder="0" 
        allowFullScreen  
        name="demo">
      </Video>
      {/* <div>
        <h2>
          You can study english here! you also can add new words and add it one description to it
          and add one or more sentences to practice your new word! 
        </h2>
        <form onSubmit={handlerSubmit}>
          <input 
            type="text"
            name="word" 
            value={input.word}
            onChange={handlerInput} />
          <input 
            type="text"
            name="description"
            value={input.description}
            onChange={handlerInput} />
          <input 
            type="text"
            name="sentence"
            value={input.sentence}
            onChange={handlerInput} />
          <button>edit</button>
        </form>
      </div> */}
      
    </Div>
  )
}

export default ItemClass;