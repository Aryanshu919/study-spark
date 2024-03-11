import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';

import Login from "./pages/Login";
import Navbar from './components/common/Navbar'
import Signup from './pages/Signup';
function App() {
  return (
    <div className='w-screen min-h-screen bg-richblue-500 flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
