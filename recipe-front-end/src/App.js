import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import AddRecipes from './components/AddRecipes';
import MyRecipes from './components/MyRecipes';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App recipe-flexbox-col">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      { loggedIn ? 
            <Routes>
              <Route path="/" element={ <Home/> } exact />
              <Route path="/add" element={ <AddRecipes/> } />
              <Route path="/myrecipes" element={ <MyRecipes/> } />
            </Routes>
          : <Login setLoggedIn={setLoggedIn} />
      }
    </div>
  );
}

export default App;
