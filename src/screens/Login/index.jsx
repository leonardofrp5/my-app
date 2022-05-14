import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../Routes';

function Login() {
  const [dataForm, setDataForm] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const test = JSON.stringify(dataForm);
    localStorage.setItem('user', test);
    navigate(ROUTES.HOME);
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
