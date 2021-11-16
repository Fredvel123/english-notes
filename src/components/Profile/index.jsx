import React, { Fragment } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux';
import {setProfile } from '../../redux-toolkit/slices/profile'
import {setMenu} from '../../redux-toolkit/slices/menu'
// icons
import {faEdit, faUserCircle, faBook, faPlayCircle, faSearch, faHome } from '@fortawesome/free-solid-svg-icons'
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
  // code to search words
  // const menu = useSelector(state => state.menu.value)
  const handlerSearch = () => {
    dispatch(setMenu({
      home: false,
      myDiccionary: false,
      newWords: false,
      myLessons: false,
      searchWords: true}))
  }
  // code to diccionary
  const handlerDiccionary = () => {
    dispatch(setMenu({
      home: false,
      myDiccionary: true,
      newWords: false,
      myLessons: false,
      searchWords: false}))
  }
  // code to home
  const handlerHome = () => {
    dispatch(setMenu({
      home: true,
      myDiccionary: false,
      newWords: false,
      myLessons: false,
      searchWords: false}))
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
        <Div onClick={handlerHome} >
            <IconEditProfile icon={faHome} />
            <p id="p3">Home</p>
          </Div>
          <Div onClick={handlerDiccionary}>
            <IconEditProfile icon={faBook} />
            <p id="p2">My diccionary</p>
          </Div>
          <Div>
            <IconEditProfile icon={faPlayCircle} />
            <p id="p3">My classes</p>
          </Div>
          <Div onClick={handlerSearch} >
            <IconEditProfile icon={faSearch} />
            <p id="p4">Search words</p>
          </Div>
          <Div  onClick={editLogIn} >
            <IconEditProfile icon={faEdit}/>
            <p id="p1">Edit your profile</p>
          </Div>
        </nav>
      </ProfileDiv>
    </Fragment>
  )
}

export default Profile
