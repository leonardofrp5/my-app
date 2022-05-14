import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './screens/Login/index';
import Register from './screens/Register/index';
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
