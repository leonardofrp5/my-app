import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import { ROUTES } from './Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<App />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route index path={ROUTES.DEFAULT} element={<h1>Error 404 Not found</h1>} />
    </Routes>
  </BrowserRouter>
);
