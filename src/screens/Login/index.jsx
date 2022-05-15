import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';
import SessionContext from '../../context/SessionContext';
import { getUsersLocalStorage, getUserLocalStorage } from '../../utils/utils';

function Login() {
  const [dataForm, setDataForm] = useState({ name: '', password: '' });
  const navigate = useNavigate();
  const { addToCart } = useContext(SessionContext);

  const onSubmit = e => {
    e.preventDefault();
    const test = JSON.stringify(dataForm);
    localStorage.setItem('user', test);
    const users = getUsersLocalStorage();
    const user = getUserLocalStorage();
    const validateUsers = users.find(item => item.name === user?.name);
    addToCart(!!validateUsers);

    if (validateUsers) {
      navigate(ROUTES.HOME);
    } else {
      alert('El usuario no existe');
      navigate(ROUTES.REGISTER);
      localStorage.removeItem('user');
    }
  };

  const changeValue = e => {
    const { name, value } = e.target;
    setDataForm(lastValue => ({ ...lastValue, [name]: value }));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="name" onChange={changeValue} />
        <input name="password" type="password" onChange={changeValue} />
        <button>Send</button>
      </form>
      <Link to={ROUTES.REGISTER}>Register</Link>
    </>
  );
}

export default Login;
