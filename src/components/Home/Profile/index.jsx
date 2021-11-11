import React, { Fragment } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux';
import {setProfile} from '../../../redux-toolkit/slices/profile';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faUser, faUserCircle} from '@fortawesome/free-solid-svg-icons'

function Profile() {
  // redux   
  const profile = useSelector(state => state.profile.value);
  const dispatch = useDispatch();
  // code to edit de log in
  const editLogIn = () => {
    dispatch(setProfile({...profile, isLogged: false}))
  }   
  return (
    <Fragment>
      {profile.image.length !== 0 ? 
        <img src={profile.image} alt="" width="250px" />
      : <FontAwesomeIcon icon={faUserCircle} /> }
      <h2>{profile.name}</h2>
      <h3>{profile.lastName}</h3>
      <FontAwesomeIcon icon={faEdit} onClick={editLogIn} />
    </Fragment>
  )
}

export default Profile
