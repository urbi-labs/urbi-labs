import { CSSTransition } from 'react-transition-group';
import Navbar from './Navbar'
import Footer from './Footer'
import LayoutBackground from './Background'
import AsideContainer from './Aside';
import ContactForm from './ContactForm';
import { useAsideContext } from '../services/AsideContext';
import MobileMenu from './Navbar/MobileMenu';


export default function Layout({ children }) {

	const { showContactForm, isContactFormOpen, isMenuOpen } = useAsideContext();

	return (
		<>
			<LayoutBackground />
			<Navbar openContactForm={showContactForm} />
			<main>{children}</main>
			<Footer openContactForm={showContactForm} />

			<CSSTransition
				in={isContactFormOpen}
				timeout={300}
				classNames="contactForm"
				unmountOnExit
			>
				<AsideContainer>
					<ContactForm></ContactForm>
				</AsideContainer>
			</CSSTransition>

			<CSSTransition
				in={isMenuOpen}
				timeout={300}
				classNames="mobileMenu"
				unmountOnExit
			>
				<AsideContainer>
					<MobileMenu
					></MobileMenu>
				</AsideContainer>
			</CSSTransition>

		</>
	)
}