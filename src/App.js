import FormAction from './Components/FormAction';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [userDetails, setUserDetails] = useState([]);
  const updateUserDetails = (newUser) => {
    setUserDetails([...userDetails, newUser]);
  };

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home userDetails={userDetails}/>} />
          <Route path="/FormAction" element = {<FormAction updateUserDetails={updateUserDetails}/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
