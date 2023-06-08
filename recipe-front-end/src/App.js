import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import AddRecipes from './components/AddRecipes';
import MyRecipes from './components/MyRecipes';
import { useState } from 'react';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [userData, setUserData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App recipe-flexbox-col">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      { loggedIn ? 
            <Routes>
              <Route path="/" element={ <Home userdata={userData}/> } exact />
              <Route path="/add" element={ <AddRecipes userdata={userData}/> } />
              <Route path="/myrecipes" element={ <MyRecipes userdata={userData}/>}/> 
              <Route path="/details/:apiId" element={<RecipeDetails />}/>
            </Routes>
          : <Login setUserData={setUserData} setLoggedIn={setLoggedIn} />
      }
    </div>
  );
}

export default App;