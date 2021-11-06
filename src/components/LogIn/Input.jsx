import React, { Fragment } from 'react';
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

function Input({title, type, placeholder,state, setState, expressions,image}) {
  const handlerChange = e => {
    setState({...state, value: e.target.value})
  }
  // validations
  const validations = () => {
    if (expressions) {
      if (expressions.test(state.value)) {
        setState({...state, valid: true})
      }else {
        setState({...state, valid: false})
      }
    }
  }   
  return (
    <Fragment>
      {!image ? 
      <div>
        <div>
          <label htmlFor="">{title}: </label>
          <input 
            type={type}
            placeholder={placeholder}
            value={state.value}
            onChange={handlerChange}
            onKeyUp={validations}
            onBlur={validations}
            required />
        </div>
        <FontAwesomeIcon icon={state.valid ? faCheckCircle : faTimesCircle } />
      </div> : null }
      {image ? 
      <div>
        <div>
          <label htmlFor="">{title}: </label>
          <input 
            type={type}
            placeholder={placeholder}
            value={state.value}
            onChange={handlerChange}
            onKeyUp={validations}
            onBlur={validations} />
        </div>
        <FontAwesomeIcon icon={state.valid ? faCheckCircle: faTimesCircle} />
      </div> : null }

    </Fragment>
  )
}

export default Input
