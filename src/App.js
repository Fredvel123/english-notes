import React, {useEffect} from 'react';
// components
import LogIn from './components/LogIn';
// react - router
import { BrowserRouter, Routes, Route} from "react-router-dom";
//  redux
import { useSelector } from 'react-redux'
function App() {
  const profile = useSelector(state => state.profile.value);
  useEffect(() => {
    localStorage.setItem("loggin", JSON.stringify(profile));
  }, [profile])
  return (
    <BrowserRouter>
      { !profile.isLogged ? <Routes>
        <Route path="/" element={<LogIn />} /> 
      </Routes> : null}
    </BrowserRouter>   
  );
}

export default App;
