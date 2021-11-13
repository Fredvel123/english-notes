import React, { Fragment, useState } from 'react';
// components
import CardsWords from './CardsWords';
// styled components
import { Box, Form, SearchIcon } from '../../styledComponents/SearchWordsStyled';
// icons
import {faSearch} from '@fortawesome/free-solid-svg-icons'


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
  };
  
  return (
    <Fragment>
      <Form action="" onSubmit={handlerSubmit} >
        <p>find new words</p>
        <label>
          <input 
            id="search" 
            type="text"
            placeholder="write any word"
            required
            value={input}
            onChange={handlerInput} />
          <SearchIcon icon={faSearch} onClick={handlerSubmit} />
        </label>
      </Form>
      <CardsWords words={words} />
    </Fragment>
  )
}

export default SearchWords
