import React, { Fragment, useEffect } from 'react';
// styled components
import { Card } from '../../styledComponents/SearchWordsStyled';
// redux
import { useDispatch ,useSelector } from 'react-redux';
import { setDiccionary } from '../../redux-toolkit/slices/diccionaty';


function CardsWords({words}) {
  const dispatch = useDispatch()
  const diccionary = useSelector(state => state.diccionary.value)  

  const addWordToMyDiccionary = el => {
    let item = words.filter(i => i.word === el.word & i.meanings.length === el.meanings.length );
    // code to validate if the item is not repeated
    if (!diccionary.find(t => t.item[0].word === item[0].word ) ) {
      dispatch(setDiccionary([...diccionary, {item}]))
    }
  };
  // saving in the local storage "my diccionary" !
  // useEffect(() => {
  //   let data = localStorage.getItem('diccionary');
  //   if(data !== null) {
  //     dispatch(setDiccionary(JSON.parse(data)))
  //   } 
  // }, [dispatch])
  // useEffect(() => {
  //   localStorage.setItem("diccionary", JSON.stringify(diccionary) )
  // }, [diccionary])

  return (
    <Fragment>
      {!words.title ? 
        words.map(item => (
          <Card>
            <h3>{item.word}</h3>
            <button onClick={() => addWordToMyDiccionary(item) } >Add</button>
            {item.meanings.map(el => (
              <div>
                <h4>{el.partOfSpeech}</h4>
                {el.definitions.map(it => <p>{it.definition}</p> )}
              </div>
            ))}
          {item.phonetics[0].audio ?
            <audio src={item.phonetics[0].audio} controls  ></audio>
          : null}
            
          </Card>
        ))
       : 
        <Card>
          <h2>So Sorry, {words.title}</h2>
        </Card>
       }
    </Fragment>
  )
}

export default CardsWords
