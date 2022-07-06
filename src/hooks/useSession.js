import { useState } from 'react';

const useInitialState = () => {
  const [state, setState] = useState(false);

  const addToCart = payload => {
    setState(payload);
  };

  return {
    addToCart,
    state
  };
};

export default useInitialState;
