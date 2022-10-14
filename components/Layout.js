import Navbar from './Navbar'
import Footer from './Footer'
import LayoutBackground from './Background'
import { useState } from 'react';
import AsideContainer from './Aside';
import ContactForm from './ContactForm';
import { useAsideContext } from '../services/AsideContext';
import MobileMenu from './Navbar/MobileMenu';

export default function Layout({ children }) {

	const { showContactForm, isContactFormOpen, isMenuOpen } = useAsideContext();
	
	return (
		<>
			<LayoutBackground />
			<Navbar openContactForm={showContactForm}/>
			<main>{children}</main>
			<Footer openContactForm={showContactForm}/>
			{isContactFormOpen && (
				<AsideContainer>
					<ContactForm></ContactForm>
				</AsideContainer>
				
			)}
			{isMenuOpen && (
				<AsideContainer>
					<MobileMenu 
					></MobileMenu>
				</AsideContainer>
				
			)}
		</>
	)
}