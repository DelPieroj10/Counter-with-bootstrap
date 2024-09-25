import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = (value = 1) => {
    setCount(count + value);
  };
  const decrement = (value = 1, negative) => {
    if (!negative && count - value < 0) {
      setCount(0);
      return;
    }
    setCount(count - value);
  };
  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
