import { createContext, useContext, useEffect } from 'react';

const ScrollContext = createContext(null);

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children, onScroll }) => {
  useEffect(() => {
    if (onScroll) {
      window.addEventListener('scroll', onScroll);
    }
    return () => {
      if (onScroll) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll]);

  return (
    <ScrollContext.Provider value={onScroll}>
      {children}
    </ScrollContext.Provider>
  );
};