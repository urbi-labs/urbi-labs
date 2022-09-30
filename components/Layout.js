import Navbar from './Navbar'
import Footer from './Footer'
import LayoutBackground from './Background'
import { useState } from 'react';
import AsideContainer from './Aside';
import ContactForm from './ContactForm';

export default function Layout({ children }) {
	
	//Aside de contacto abierto o cerrado
	const [showContactForm, setShowContactForm] = useState(false);

	// Funcion para el form de contacto mobile. Cierra el Menu y abre el Contact Form
	const openContactForm = () => {
        setShowContactForm(true);
		document.body.style.overflow = 'hidden';
    }

	// Funcion para el form de contacto mobile. Cierra el Menu y abre el Contact Form
	const closeContactForm = () => {
        setShowContactForm(false);
		document.body.style.overflow = 'auto';
    }

	return (
		<>
			<LayoutBackground />
			<Navbar openContactForm={openContactForm} closeContactForm={closeContactForm}/>
			<main>{children}</main>
			<Footer openContactForm={openContactForm}/>
			{showContactForm && (
				<AsideContainer 
					onClose={() => closeContactForm()}
				>
					<ContactForm></ContactForm>
				</AsideContainer>
				
			)}
		</>
	)
}