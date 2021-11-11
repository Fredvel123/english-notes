import React, { Fragment } from 'react'

function InputRadio({value, title, state, setState}) {
  
  const handlerCategories = e => {
    setState(e.target.value)
  }
  return (
    <Fragment>
      <div>
          <label htmlFor={value} >{title}</label>
          <input 
            type="radio" 
            name="categories" 
            id={value} 
            value={value} 
            onChange={handlerCategories}
            required />
        </div>
    </Fragment>
  )
}

export default InputRadio;
