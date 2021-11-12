import React, { Fragment } from 'react'

function CardsWords({words, phonetics, meanings}) {
  return (
    <Fragment>
      {/* <div>
        <h2>{words.map(item => item.word )}</h2>
        {phonetics.length !== 0 ? <audio src={phonetics.audio} controls ></audio> : null}
        {meanings.map(item => (
            <div>
              <h3>{item.partOfSpeech}</h3>
              <p>{item.definitions.map(el => el.definition) }</p>
            </div>
        ) )}
      </div> */}
      {words ? 
        words.map(item => (
          <div>
            <h3>{item.word}</h3>
            <audio src={item.phonetics[0].audio} controls  ></audio>

            {item.meanings.map(el => (
              <div>
                <h4>{el.partOfSpeech}</h4>
                {el.definitions.map(it => <p>{it.definition}</p> )}
              </div>
            ))}
            
          </div>
        ))
       : null}
    </Fragment>
  )
}

export default CardsWords
