import styled from "styled-components"
import { MobileMenuIcon, Nav } from "../Navbar/styles";

export const AsideContainer = styled.aside`
    width: 100%;
    max-width: 100%;
    z-index: 999;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: hidden;

	// Contact Form Enter & Exit Animations

	&.contactForm-enter,
	&.mobileMenu-enter {
		opacity: 0;
	}

	&.contactForm-enter-active,
	&.mobileMenu-enter-active {
		opacity: 1;
		transition: opacity 300ms;
	}

	&.contactForm-exit,
	&.mobileMenu-exit {
		opacity: 1;
	}

	&.contactForm-exit-active,
	&.mobileMenu-exit-active {
		opacity: 0;
		transition: opacity 300ms;
	}
    
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        flex-direction: column;
    }
`;

export const ComplementArea = styled.div` 
    flex: 1 1 100%;
    background: rgba(1, 46, 127, 0.3);

	${AsideContainer}.contactForm-enter & {
		transform: translateX(-40px);
		opacity: 0;
	}

	${AsideContainer}.contactForm-enter-active & {
		transform: translateX(0);
		opacity: 1;
		transition: transform 300ms, opacity 300ms;
	}

	${AsideContainer}.contactForm-exit & {
		transform: translateX(0);
		opacity: 1;
	}

	${AsideContainer}.contactForm-exit-active & {
		transform: translateX(-40px);
		opacity: 0;
		transition: transform 300ms, opacity 300ms;
	}

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        height: 150px;        
        width: 100%;   
        flex: none;     
    }
`

export const MainContentArea = styled.div` 
    background-color: #fff;
	overflow: scroll;
	flex: 1 0 520px;

	// Contact Form Enter & Exit Animations

	${AsideContainer}.contactForm-enter & {
		transform: translateX(40px);
		opacity: 0;
	}

	${AsideContainer}.contactForm-enter-active & {
		transform: translateX(0);
		opacity: 1;
		transition: transform 300ms, opacity 300ms;
	}

	${AsideContainer}.contactForm-exit & {
		transform: translateX(0);
		opacity: 1;
	}

	${AsideContainer}.contactForm-exit-active & {
		transform: translateX(40px);
		opacity: 0;
		transition: transform 300ms, opacity 300ms;
	}

	// Mobile Menu Enter & Exit Animations

	${AsideContainer}.mobileMenu-enter & {
		transform: translateY(40px);
		opacity: 0;
	}

	${AsideContainer}.mobileMenu-enter-active & {
		transform: translateY(0);
		opacity: 1;
		transition: transform 200ms, opacity 200ms;
	}

	${AsideContainer}.mobileMenu-exit & {
		transform: translateY(0);
		opacity: 1;
	}

	${AsideContainer}.mobileMenu-exit-active & {
		transform: translateY(40px);
		opacity: 0;
		transition: transform 200ms, opacity 200ms;
	}

    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        width: 100%;
        flex: 1;
    }
`

export const CloseNav = styled(Nav)`
    border-bottom: 0;
    height: auto;
`

export const CloseIcon = styled(MobileMenuIcon)` 
    background-color: #fff;
    margin: 20px 0;
    padding: 25px;
    border: 1px solid ${props => props.theme.colors.blue};
`

export const ContentContainer = styled.div` 
    display: flex;
    align-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        width: 100%;
        flex: 1;
        flex-direction: row;
        padding-top: 0;
    }
` 