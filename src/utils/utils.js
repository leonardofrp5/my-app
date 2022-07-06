export const getUsersLocalStorage = () => {
  const user = localStorage.getItem('users');
  return user ? JSON.parse(user) : [];
};

export const transformUser = (getSerial, dataForm) => {
  return JSON.stringify([...getSerial, dataForm]);
};

export const getUserLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : [];
};
