import React, { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import SessionContext from '../context/SessionContext';
import { getUsersLocalStorage, getUserLocalStorage } from '../utils/utils';

function ProtectedRoute({ redirectPath = ROUTES.LOGIN, children }) {
  const { state } = useContext(SessionContext);
  const [token, setToken] = useState();
  const { addToCart } = useContext(SessionContext);

  // useEffect(() => {
  //   const users = getUsersLocalStorage();
  //   const user = getUserLocalStorage();
  //   const validateUsers = users.find(item => item.name === user?.name);
  //   setToken(!!validateUsers);
  //   console.log(token, 'token', !!validateUsers);
  //   addToCart(!!validateUsers);
  // }, [addToCart]);

  if (!state) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectedRoute;
