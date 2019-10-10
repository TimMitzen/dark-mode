import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? item : initialValue;
  });
  const customSetter = newValue => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, newValue);
  };
  return [storedValue, customSetter];
}
