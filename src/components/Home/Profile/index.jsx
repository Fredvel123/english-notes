import React, { Fragment } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux';
import {setProfile} from '../../../redux-toolkit/slices/profile';
// icons
import {faEdit, faUserCircle} from '@fortawesome/free-solid-svg-icons'
// styled components
import { IconProfile, IconEditProfile, Image, ProfileDiv } from '../../../styledComponents/ProfileStyled';

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
      <ProfileDiv>
        {profile.image ? 
          <Image src={profile.image} alt="" width="250px" />
        : <IconProfile icon={faUserCircle} /> }
        <h2>{profile.name}</h2>
        <h3>{profile.lastName}</h3>
        <div>
          <IconEditProfile icon={faEdit} onClick={editLogIn} /> 
          <p>Edit your profile</p>
        </div>  
      </ProfileDiv>
    </Fragment>
  )
}

export default Profile
