import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import { getUsersLocalStorage, transformUser } from '../../utils/utils';

function Register() {
  const [dataForm, setDataForm] = useState({ name: '', password: '' });

  const onSave = e => {
    e.preventDefault();
    const getSerial = getUsersLocalStorage();
    const validations = getSerial.find(item => item.name.toUpperCase() === dataForm.name.toUpperCase());

    if (validations) {
      alert('El usuario ya existe');
      return;
    } else {
      const dataUser = transformUser(getSerial, dataForm);
      localStorage.setItem('users', dataUser);
      setDataForm(() => ({ name: '', password: '' }));
    }
  };

  const toggleForm = e => {
    const { name, value } = e.target;
    setDataForm(lastValue => ({ ...lastValue, [name]: value }));
  };

  return (
    <>
      <h1></h1>
      <form onSubmit={onSave}>
        <input name="name" onChange={toggleForm} value={dataForm.name} />
        <input name="password" type="password" onChange={toggleForm} value={dataForm.password} />
        <button>Save</button>
      </form>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </>
  );
}

export default Register;
