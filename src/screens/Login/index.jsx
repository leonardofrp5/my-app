import React from "react";

function Login() {

  const onSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const { password } = e.target;

    console.log(name, password)
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="nombre"  />
      <input name="password" type="password"  />
      <button>Send</button>
    </form >
  );
}

export default Login;