import React, { Fragment } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux';
import {setProfile } from '../../redux-toolkit/slices/profile'
// icons
import {faEdit, faUserCircle, faBook, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
// styled components
import { IconProfile, IconEditProfile, Image, ProfileDiv, Div, DataBox } from '../../styledComponents/ProfileStyled';

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
        <DataBox>
          {
            profile.image ?
              <Image src={profile.image} alt="" width="250px" />
            : <IconProfile icon={faUserCircle} />
          }
          <h2>{profile.name}</h2>
          <h2>{profile.lastName}</h2>
        </DataBox>
        <nav>
          <Div  onClick={editLogIn} >
            <IconEditProfile icon={faEdit}/>
            <p id="p1">Edit your profile</p>
          </Div>
          <Div>
            <IconEditProfile icon={faBook} />
            <p id="p2">My diccionary</p>
          </Div>
          <Div>
            <IconEditProfile icon={faPlus} />
            <p id="p3">New Words</p>
          </Div>
          <Div>
            <IconEditProfile icon={faSearch} />
            <p id="p4">Search words</p>
          </Div>
        </nav>
      </ProfileDiv>
    </Fragment>
  )
}

export default Profile
