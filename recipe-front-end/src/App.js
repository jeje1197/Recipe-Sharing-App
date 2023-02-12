import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import AddRecipes from './components/AddRecipes';
import MyRecipes from './components/MyRecipes';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      {/* <div className="recipe-app-body-container"> */}
        { loggedIn ? 
              <Routes>
                <Route path="/" element={ <Home/> } exact />
                <Route path="/add" element={ <AddRecipes/> } />
                <Route path="/myrecipes" element={ <MyRecipes/> } />
              </Routes>
            : <Login setLoggedIn={setLoggedIn} />
        }
      {/* </div> */}
    </div>
  );
}

export default App;
