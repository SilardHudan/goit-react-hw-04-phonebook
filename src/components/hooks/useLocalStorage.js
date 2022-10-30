import LocalStorage from 'service/localStorage';
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValues) => {
  const [value, setValue] = useState(
    () => LocalStorage.get(key) ?? initialValues
  );

  useEffect(() => {
    LocalStorage.set(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
