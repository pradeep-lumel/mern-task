import './App.css';
import CreateEmployee from './components/CreateEmployee';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeList from './components/EmployeeList';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/employee-list' element={<EmployeeList/>}/>
       <Route path='/employee-edit' element={<EmployeeEdit/>}/>
       <Route path='/create-employee' element={<CreateEmployee/>}/>
       <Route path='/edit-employee' element={<EmployeeEdit/>}/>
     </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
