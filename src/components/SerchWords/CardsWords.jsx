import React, { Fragment } from 'react';
// styled components
import { Card } from '../../styledComponents/SearchWordsStyled';

function CardsWords({words}) {
  return (
    <Fragment>
      {!words.title ? 
        words.map(item => (
          <Card>
            <h3>{item.word}</h3>

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
