import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import Home from './screens/Home';
import ProtectedRoute from './constants/ProtectedRoute';
import SessionContext from './context/SessionContext';
import useInitialState from './hooks/useSession';

function App() {
  const initialState = useInitialState();

  // useEffect(() => {
  //   console.log(validateUsers, user);
  //   if (validateUsers) {
  //     navigate(ROUTES.HOME);
  //   } else if (!validateUsers && user.length >= 0) {
  //     navigate(ROUTES.LOGIN);
  //   } else {
  //     alert('El usaurio no existe');
  //     navigate(ROUTES.LOGIN);
  //     localStorage.removeItem('user');
  //   }
  // }, []);

  return (
    <SessionContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route index path={ROUTES.DEFAULT} element={<h1>Error 404 Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
}

export default App;
