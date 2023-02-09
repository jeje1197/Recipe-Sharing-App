import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={ <Home/> } exact />
        {/* <Route path="/view" element={ <ProductView setProductToUpdate = {setProductToUpdate}/>} />
        <Route path="/add" element={<ProductCreate/>} />
        <Route path="/update" element={<ProductUpdate productToUpdate={productToUpdate}/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
