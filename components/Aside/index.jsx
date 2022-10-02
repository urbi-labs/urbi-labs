import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import {AsideContainer, CloseIcon, CloseNav, ComplementArea, ContentContainer, MainContentArea} from './styles'
import closeMenuIcon from '/public/assets/close-menu-icon.svg'

const Aside = ( {children, onClose} ) => {

  // Funcion para cierre del Aside
  const handleCloseClick = (e) => {
    
    e.preventDefault();
    onClose();

  };

  // Funcion para cierre Aside al apretar tecla ESC
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      onClose()
    }
  }, []);

  // Llamada al evento de cierre al apretar ESC
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  
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