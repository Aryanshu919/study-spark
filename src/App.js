import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
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


function App() {
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
            
            {/* <Route path="dashboard/Settings" element={<Settings />} />
            

            {
              user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
                </>
              )
            }

            {
              user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                <Route path="dashboard/instructor" element={<Instructor />} />
                <Route path="dashboard/add-course" element={<AddCourse />} />
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
                
                </>
              )
            } */}


          </Route>



        <Route path="*" element={<Error />} />

      </Routes>
      
    </div>
  );
}

export default App;
