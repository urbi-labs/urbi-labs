import {createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const showContactForm = () => {
    document.body.style.overflow = 'hidden';
    setIsContactFormOpen(true);
  };
  const closeContactForm = () => {
    document.body.style.overflow = 'auto';
    setIsContactFormOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    document.body.style.overflow = 'hidden';
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    document.body.style.overflow = 'auto';
    setIsMenuOpen(false);
  };

  return (
    <AppContext.Provider value={{ isContactFormOpen, showContactForm, closeContactForm, isMenuOpen, showMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAsideContext = () => {
  return useContext(AppContext);
};

export { AppProvider };