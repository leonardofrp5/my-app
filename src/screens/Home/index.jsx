import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

function Home() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('user');
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="App">
      <h1>Hello app</h1>
      <button onClick={logOut}>Salir</button>
    </div>
  );
}

export default Home;
