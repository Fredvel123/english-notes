import React, {useEffect} from 'react';
// components
import LogIn from './components/LogIn';
import Home from './components/Home';
// react - router
import { BrowserRouter, Routes, Route} from "react-router-dom";
//  redux
import { useSelector } from 'react-redux'
function App() {
  const profile = useSelector(state => state.profile.value);
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
      : null}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
