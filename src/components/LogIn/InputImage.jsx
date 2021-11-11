import React, { Fragment } from 'react'
// components
import { BoxInput } from '../../styledComponents/LogInStyles';
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdBadge} from '@fortawesome/free-solid-svg-icons';

function InputImage({ setState, state }) {
  // code to add image.
  const addImage = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = e => {
      e.preventDefault();
      setState(e.target.result)
    }
  }
  return (
    <Fragment>
      <BoxInput state={state} >
        <label htmlFor="file">
          <FontAwesomeIcon icon={faIdBadge} />
          Image
        </label>
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={ e =>  addImage(e)} />
      </BoxInput>            
    </Fragment>
  )
}

export default InputImage
