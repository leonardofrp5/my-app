import React, { useState } from "react";

function Register() {
  const [dataForm, setDataForm] = useState({name: "", password: ""});

  const onSave = (e) => {
    e.preventDefault();

    const users = localStorage.getItem("users");
    const getSerial =users ? JSON.parse(users) : [];
    const dataUser = JSON.stringify([...getSerial, dataForm]);
    localStorage.setItem("users", dataUser);
  }

  const toggleForm = (e) => {
    const { name, value } = e.target
    setDataForm(lastValue => ({ ...lastValue, [name]: value }));
  }

  return (
    <>
    <h1></h1>
    <form onSubmit={onSave}>
      <input name="name" onChange={toggleForm}/>
      <input name="password" type="password" onChange={toggleForm} />
      <button>Save</button>
    </form >
    </>
  );
}

export default Register;