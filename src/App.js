import React, { useEffect } from 'react';
// components
import LogIn from './components/LogIn';
import Home from './components';
import ItemClass from './components/MyClasses/ItemClass'
//  redux
import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from './redux-toolkit/slices/profile';
// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
    <BrowserRouter>
      {!profile.isLogged ?
        <Routes>
          <Route path="/" element={<LogIn />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ItemClass />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
