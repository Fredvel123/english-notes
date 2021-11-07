import React, { Fragment } from 'react';
// icons
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
// styled components
import { IconsStyled, InputStyled } from '../../styledComponents/LogIn';


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
          <InputStyled 
            type={type}
            placeholder={placeholder}
            value={state.value}
            onChange={handlerChange}
            onKeyUp={validations}
            onBlur={validations}
            required
            state={state.valid} />
        </div>
        <IconsStyled icon={state.valid ? faCheckCircle : faTimesCircle } state={state.valid} />
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
        <IconsStyled icon={state.valid ? faCheckCircle: faTimesCircle} state={state.valid} />
      </div> : null }

    </Fragment>
  )
}

export default Input
