import React, { Fragment, useEffect } from 'react';
// components
import LogIn from './components/LogIn';
import Home from './components';
//  redux
import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from './redux-toolkit/slices/profile';

function App() {
  const profile = useSelector(state => state.profile.value);
  const dispatch = useDispatch()
  // local storage to loggin
  useEffect(() => {
    const datos = localStorage.getItem("loggin");
    if (datos != null) {
      dispatch(setProfile(JSON.parse(datos)))
    }
    // eslint-disable-next-line
  }, [dispatch])
  useEffect(() => {
    localStorage.setItem("loggin", JSON.stringify(profile));
    // eslint-disable-next-line
  }, [profile])
  
  return (
    <Fragment>
      {!profile.isLogged ? 
        <LogIn />
      : 
        <Home />
      }
    </Fragment>
  );
}

export default App;
