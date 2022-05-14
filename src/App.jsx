import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './Routes';
import { getUsersLocalStorage, getUserLocalStorage } from './utils/utils';

function App() {
  const users = getUsersLocalStorage();
  const user = getUserLocalStorage();
  const navigate = useNavigate();

  const validateUsers = users.find(item => item.name === user?.name);

  useEffect(() => {
    console.log(validateUsers, user);
    if (validateUsers) {
      navigate(ROUTES.HOME);
    } else if (!validateUsers && user.length >= 0) {
      navigate(ROUTES.LOGIN);
    } else {
      alert('El usaurio no existe');
      navigate(ROUTES.LOGIN);
      localStorage.removeItem('user');
    }
  }, []);

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

export default App;
