import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/common/Navbar'
function App() {
  return (
    <div className='w-screen min-h-screen bg-richblue-500 flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
