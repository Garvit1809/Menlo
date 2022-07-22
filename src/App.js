import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Register';
import OTP from './Pages/OTP';


function App() {
  return (
    <Routes>
    <Route path='/register' element={<Register/>} />
    <Route path='/otp' element={<OTP/>} />
    </Routes>
  );
}

export default App;
