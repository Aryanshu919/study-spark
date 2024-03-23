import logo from './logo.svg';
import './App.css';
import { Routes,Route , useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import OpenRoute from "./components/core/Auth/OpenRoute"
import Login from "./pages/Login";
import Navbar from './components/common/Navbar'
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Error from './pages/Error';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/Dashboard/MyProfile';
import Settings from './components/core/Dashboard/Setttings/';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';
import Cart from './components/core/Dashboard/Cart/';
import {ACCOUNT_TYPE} from './utils/constants';
import {useDispatch, useSelector} from "react-redux";
function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {user} = useSelector((state) => state.profile);

  return (
    <div className='w-screen min-h-screen bg-richblue-500 flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/update-password/:id' element={<OpenRoute><UpdatePassword /></OpenRoute>}></Route>
        <Route path='/verify-email' element={<VerifyEmail />}></Route>
        <Route path='/about' element={<OpenRoute><About /></OpenRoute>}></Route>
        
              <Route 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            
            <Route path="dashboard/Settings" element={<Settings />} />
          
            {
             
              user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
                <Route path="dashboard/cart" element={<Cart />} />

                </>
              )
            }

         


          </Route>



        <Route path="*" element={<Error />} />

      </Routes>
      
    </div>
  );
}

export default App;
