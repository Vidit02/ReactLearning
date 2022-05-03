import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/listproducts' element={<HomeContainer.ListProduct/>}/>
        <Route path='/' element={<HomeContainer.AddProduct/>}/>
      </Routes> 
        
    </div>
  );
}

export default App;
