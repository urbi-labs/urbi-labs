import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { useAsideContext } from '../../services/AsideContext';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import {AsideContainer, CloseIcon, CloseNav, ComplementArea, ContentContainer, MainContentArea} from './styles'
import closeMenuIcon from '/public/assets/close-menu-icon.svg'

const Aside = ( {children} ) => {

  const { isContactFormOpen, closeContactForm, closeMenu, isMenuOpen } = useAsideContext();
  // Funcion para cierre del Aside
  const handleCloseClick = (e) => {
    
    e.preventDefault();
    isContactFormOpen && closeContactForm();
    isMenuOpen && closeMenu();

  };

  // Funcion para cierre Aside al apretar tecla ESC
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      isContactFormOpen && closeContactForm();
      isMenuOpen && closeMenu();
    }
  }, [isContactFormOpen,isMenuOpen,closeContactForm,closeMenu]);

  // Llamada al evento de cierre al apretar ESC
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
  
  return (
    
    <AsideContainer>
        <ComplementArea onClick={handleCloseClick}></ComplementArea>
        <MainContentArea>
          <CloseNav>
            <GridContainer>
              <GridItem
                gridPosition={{
                  desktop: {
                    columnStart: 11,
                    columnEnd: 12,
                  },
                  tablet: {
                    columnStart: 11,
                    columnEnd: 12
                  },
                  mobile: {
                    columnStart: 11,
                    columnEnd: 12
                  }
                }}
                  style={{position: 'relative'}}
                >
                <CloseIcon
                    onClick={handleCloseClick}
                >
                  <Image
                    layout="responsive" 
                    src={closeMenuIcon}
                    alt="Close Icon"
                  />
                </CloseIcon>
              </GridItem>
            </GridContainer>            
          </CloseNav>
          <ContentContainer>
            {children}                
          </ContentContainer>
        </MainContentArea>
    </AsideContainer>

  )
}

export default Aside;