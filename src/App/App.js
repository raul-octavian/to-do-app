
import './App.css';
import { Outlet } from "react-router-dom";
import { useState } from 'react'
import Header from '../components/Header/Header'

function App() {
  const [userInfo, setUserInfo] = useState({})

  return (
    <div className="App">
      <Header user={userInfo} />
      <h1>Welcome to your simple todo app {userInfo?.name}</h1>
      <Outlet context={[userInfo, setUserInfo]} />
    </div>
  );
}

export default App;
