import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage('campus-events-favs', []);
  const [isDarkMode, setIsDarkMode] = useLocalStorage('campus-dark-mode', false);

  const toggleFavorite = (event) => {
    setFavorites(prev => {
      const isFav = prev.find(e => e.id === event.id);
      if (isFav) return prev.filter(e => e.id !== event.id);
      return [...prev, event];
    });
  };

  return (
    <AppContext.Provider value={{ favorites, toggleFavorite, isDarkMode, setIsDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};
