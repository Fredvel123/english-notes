import React, { Fragment, useState } from 'react';
// components
import CardsWords from './CardsWords';

function SearchWords() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const handlerInput = e => {
    setInput(e.target.value);
  }
  // send info
  const handlerSubmit = e => {
    e.preventDefault();
    getApi(input);
    console.log(words);
  }    
  // get info from an api.
  const getApi = async word => {
    const url_api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const res_data = await url_api.json();
    setWords(res_data);
    setMeanings(res_data[0].meanings)
    setPhonetics(res_data[0].phonetics[0])
  };
  const [meanings, setMeanings] = useState([])
  const [phonetics, setPhonetics] = useState([])
  
  return (
    <Fragment>
      <form action="" onSubmit={handlerSubmit} >
        <input 
          id="search" 
          type="text"
          required
          value={input}
          onChange={handlerInput} />
        <button>Search</button>
      </form>
      <CardsWords words={words} phonetics={phonetics} meanings={meanings} />
    </Fragment>
  )
}

export default SearchWords
