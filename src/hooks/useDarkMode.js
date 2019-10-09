import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';


export function useDarkMode() {
   const[darkMode, setDarkMode] = useLocalStorage()
   useEffect(() => {
      darkMode 
      ? document.body.classList.add('dark-mode')//if
      : document.body.classList.remove('dark-mode')//else
   }, [darkMode])

   return [darkMode, setDarkMode]
}

