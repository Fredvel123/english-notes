import React, { Fragment, useState } from 'react';
// components
import CardsWords from './CardsWords';
// styled components
import { Form, SearchIcon } from '../../styledComponents/SearchWordsStyled';
// icons
import {faSearch} from '@fortawesome/free-solid-svg-icons'
// redux
import { useSelector } from 'react-redux';

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
    setInput("")
  }    
  // get info from an api.
  const getApi = async word => {
    const url_api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const res_data = await url_api.json();
    setWords(res_data);
  };
  // redux to menu
  const menu = useSelector(state => state.menu.value)
  
  return (
    <Fragment>
      <Form action="" onSubmit={handlerSubmit} state={menu.searchWords} >
        <p>find new words</p>
        <label>
          <input 
            id="search" 
            type="text"
            placeholder="write any word"
            required
            autocomplete="off"
            value={input}
            spellcheck="false"
            onChange={handlerInput} />
          <SearchIcon icon={faSearch} onClick={handlerSubmit} />
        </label>
      </Form>
     
      <CardsWords words={words} state={menu.searchWords} />
    </Fragment>
  )
}

export default SearchWords
