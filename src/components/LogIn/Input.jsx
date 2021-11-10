import React, { Fragment } from 'react';
// icons
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
// styled components
import { IconsStyled, InputStyled, BoxInputLabel, InputIcon } from '../../styledComponents/LogInStyles';


function Input({ title, type, placeholder, state, setState, expressions, image }) {
  const handlerChange = e => {
    setState({ ...state, value: e.target.value })
  }
  // validations
  const validations = () => {
    if (expressions) {
      if (expressions.test(state.value)) {
        setState({ ...state, valid: true })
      }
      else if(state.value.length === 0){
        setState({...state, valid: null})
      } else {
        setState({ ...state, valid: false })
      }
    }
  }
  return (
    <Fragment>
      {!image ?
        <BoxInputLabel>
          <label >{title}: </label>
          <InputIcon >
            <InputStyled
              type={type}
              placeholder={placeholder}
              value={state.value}
              onChange={handlerChange}
              onKeyUp={validations}
              onBlur={validations}
              required
              state={state.valid} />
            <IconsStyled icon={state.valid ? faCheckCircle : faTimesCircle} state={state.valid} />
          </InputIcon >
        </BoxInputLabel> : null}
      {image ?
        <BoxInputLabel>
          <label htmlFor="">{title}: </label>
          <InputIcon>
            <InputStyled
              type={type}
              placeholder={placeholder}
              value={state.value}
              onChange={handlerChange}
              onKeyUp={validations}
              onBlur={validations} />
            <IconsStyled icon={state.valid ? faCheckCircle : faTimesCircle} state={state.valid} />
          </InputIcon>
        </BoxInputLabel> : null}

    </Fragment>
  )
}

export default Input
