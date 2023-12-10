import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/home' element={ <Home/>}/>
      </Routes>     
    </div>
  );
}

export default App;
