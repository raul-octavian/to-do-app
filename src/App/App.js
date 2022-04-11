
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to React Router!</h1>
      <Outlet />
    </div>
  );
}

export default App;
