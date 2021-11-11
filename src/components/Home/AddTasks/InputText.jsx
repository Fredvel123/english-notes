import React, { Fragment } from 'react'

function InputText({placeholder, state, setState, validation}) {
  const handlerChange = e => {
    setState({...state, value: e.target.value});
  }
  // validation
  const handlerValidation = () => {
    if (validation.test(state.value)) {
      setState({...state, valid: true})
    }else {
      setState({...state, valid: false})
    }
  }  
  return (
    <Fragment>
      <div>
        <input 
          type="text"
          placeholder={placeholder}
          value={state.value}
          onChange={handlerChange}
          onBlur={handlerValidation}
          onKeyUp={handlerValidation}
          required />
      </div>            
    </Fragment>
  )
}

export default InputText
