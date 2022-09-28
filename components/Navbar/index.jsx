
import useWindowSize from "../../services/windowSize"
import { useState, useEffect } from "react"

import { withTheme } from 'styled-components'
import Link from "next/link"
import Image from "next/image"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"

import {Nav, MenuItem, MobileMenuIcon, SubMenuNav} from './styles'
import logo from '/public/assets/urbi-labs.png'
import mobileMenuIcon from '/public/assets/mobile-menu-icon.svg'
import downArrow from '/public/assets/down-arrow.svg'
import { useRouter } from "next/router"
import AsideContainer from "../Aside"
import MobileMenu from "./MobileMenu"
import ContactForm from "../ContactForm"



const Navbar = ( props ) => {

	const size = useWindowSize()

	const [isMobile, setIsMobile] = useState(true);

	// Render o no del menu mobile o desktop
	useEffect(() => {

		setIsMobile(true);
		
		if(size.width > props.theme.breakpoints.tablet) {
			setIsMobile(false);
		} 

	}, [size]);

	//Aside del Mobile menu abierto o cerrado
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		setShowMenu(true);
	}

	const closeMenu = () => {
		setShowMenu(false);
	}

	// Funcion para el form de contacto mobile. Cierra el Menu y abre el Contact Form
	const handleContactFormClick = () => {
        setShowMenu(false);
		openContactForm2();
    }

	const openContactForm2 = () => {
		props.openContactForm();
	}

	// Manejo del submenu de Services
	const [showServicesSubmenuNav, setShowServicesSubmenuNav] = useState(false);

	// Manejo del submenu de Projects
	const [showContentSubmenuNav, setShowContentSubmenuNav] = useState(false);

	// Usado para darle estilo a la opcion del menu actual
	const  { asPath } = useRouter();

	const contactUsStyles = {
		backgroundColor: props.theme.colors.blue,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: 'pointer'
	}

	const currentPage= {
		borderBottom: `5px solid ${props.theme.colors.blue}`
	}
	
	if (!isMobile) {
		return(
			<>
			<Nav>
				<GridContainer>

					<NavbarItem
					gridPosition={{
						desktop: {
							columnStart: 1,
							columnEnd: 2,
						},
						tablet: {
							columnStart: 1,
							columnEnd: 3
						},
						mobile: {
							columnStart: 1,
							columnEnd: 3
						}
					}}
					href="/"
					>
						<Image
							src={logo}
							width="90px"
							height="56px"
							alt="UrbiLabs"
						/>
					</NavbarItem>

					<NavbarItem
					style={ asPath === '/' ? currentPage : '' }
					href="/"
					gridPosition={{
						desktop: {
							columnStart: 3,
							columnEnd: 4
						},
						tablet: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 2,
							rowEnd: 3
						},
						mobile: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 2,
							rowEnd: 3
						}
					}}
					>
						Home
					</NavbarItem>

					<NavbarItem
					style={ asPath === '/projects' ? currentPage : '' }
					href="/projects"
					gridPosition={{
						desktop: {
							columnStart: 5,
							columnEnd: 6,
						},
						tablet: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 3,
							rowEnd: 4
						},
						mobile: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 3,
							rowEnd: 4
						}
					}}
					>
						Projects
					</NavbarItem>

					<NavbarItem
					style={ asPath === '/services' ? currentPage : '' }
					href="/services"
					gridPosition={{
						desktop: {
							columnStart: 7,
							columnEnd: 8
						},
						tablet: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 4,
							rowEnd: 5
						},
						mobile: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 4,
							rowEnd: 5
						}
					}}
					onMouseEnter={() => setShowServicesSubmenuNav(true)}
					onMouseLeave={() => setShowServicesSubmenuNav(false)}
					>
							Services
							<Image
								src={downArrow}
								alt="Arrow Icon"
								height= '8px'
								width= '30px'
							/>
					</NavbarItem>

					<NavbarItem
					style={ asPath === '/content' ? currentPage : '' }
					href="/content"
					gridPosition={{
						desktop: {
							columnStart: 9,
							columnEnd: 10
						},
						tablet: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 5,
							rowEnd: 6
						},
						mobile: {
							columnStart: 1,
							columnEnd:12,
							rowStart: 5,
							rowEnd: 6
						}
					}}
					onMouseEnter={() => setShowContentSubmenuNav(true)}
					onMouseLeave={() => setShowContentSubmenuNav(false)}
					>
						Content
						<Image
							src={downArrow}
							alt="Arrow Icon"
							height= '8px'
							width= '30px'
						/>
					</NavbarItem>

					<GridItem
						gridPosition={{
							desktop: {
								columnStart: 11,
								columnEnd: 12,
							},
							tablet: {
								columnStart: 1,
								columnEnd:12,
								rowStart: 6,
								rowEnd: 7
							},
							mobile: {
								columnStart: 1,
								columnEnd:12,
								rowStart: 6,
								rowEnd: 7
							}
						}}
						style={contactUsStyles}
						onClick={() => openContactForm2()}
					>
						<MenuItem className='contact-us' >Contact us</MenuItem>
					</GridItem>					

				</GridContainer>
			</Nav>
			{showServicesSubmenuNav && 
				(<SubMenuNav onMouseEnter={() => setShowServicesSubmenuNav(true)} onMouseLeave={() => setShowServicesSubmenuNav(false)}>
					<GridContainer>
						<NavbarItem
							href="/services/web-design"
							gridPosition={{
								desktop: {
									columnStart: 1,
									columnEnd: 6,
									rowStart: 1,
									rowEnd: 2
								}
							}}
							style={{justifyContent: 'end', paddingRight: '20px'}}
						>
							Web Design		
						</NavbarItem>
						<NavbarItem
							href="/services/web-development"
							gridPosition={{
								desktop: {
									columnStart: 1,
									columnEnd: 6,
									rowStart: 2,
									rowEnd: 3
								}
							}}
							style={{justifyContent: 'end', paddingRight: '20px'}}
						>
							Web Development		
						</NavbarItem>
						<NavbarItem
							href="/services/crm-integration"
							gridPosition={{
								desktop: {
									columnStart: 7,
									columnEnd: 12,
									rowStart: 1,
									rowEnd: 2
								}
							}}
							style={{justifyContent: 'start', paddingLeft: '20px'}}
						>
							CRM Integration		
						</NavbarItem>
						<NavbarItem
							href="/services/conversion-rate-optimization"
							gridPosition={{
								desktop: {
									columnStart: 7,
									columnEnd: 12,
									rowStart: 2,
									rowEnd: 3
								}
							}}
							style={{justifyContent: 'start', paddingLeft: '20px'}}
						>
							Conversion Rate Optimization		
						</NavbarItem>
					</GridContainer>
				</SubMenuNav>
			)}
			{showContentSubmenuNav && 
				(<SubMenuNav onMouseEnter={() => setShowContentSubmenuNav(true)} onMouseLeave={() => setShowContentSubmenuNav(false)}>
					<GridContainer>
						<NavbarItem
							href="/content/resources"
							gridPosition={{
								desktop: {
									columnStart: 1,
									columnEnd: 6,
									rowStart: 1,
									rowEnd: 2
								}
							}}
							style={{justifyContent: 'end', paddingRight: '20px'}}
						>
							Resources		
						</NavbarItem>
						<NavbarItem
							href="/content/blog"
							gridPosition={{
								desktop: {
									columnStart: 7,
									columnEnd: 12,
									rowStart: 1,
									rowEnd: 2
								}
							}}
							style={{justifyContent: 'start', paddingLeft: '20px'}}
						>
							Blog		
						</NavbarItem>
					</GridContainer>
				</SubMenuNav>
			)}
			</>
		)
	} 

	return (
		<Nav>
			<GridContainer>
				<NavbarItem
					gridPosition={{
						desktop: {
							columnStart: 1,
							columnEnd: 2,
						},
						tablet: {
							columnStart: 1,
							columnEnd: 3
						},
						mobile: {
							columnStart: 1,
							columnEnd: 3
						}
					}}
					href="/"
					>
						<Image
							src={logo}
							width="90px"
							height="56px"
							alt="UrbiLabs"
						/>
					</NavbarItem>
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
					<MobileMenuIcon
						onClick={() => openMenu()}
					>
						<Image
							layout="responsive" 
							src={mobileMenuIcon}
							alt="Hamburguer Icon"
						/>
					</MobileMenuIcon>
				</GridItem>
			</GridContainer>	
			{showMenu && (
				<AsideContainer 
					onClose={() => closeMenu()}
					
				>
					<MobileMenu 
						onClick={() => closeMenu()}
						handleContactFormClick={handleContactFormClick}
					></MobileMenu>
				</AsideContainer>
				
			)}
		</Nav>
	)

}

const NavbarItem = (props) => {

	const menuItemStyles = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	}

	return (
		<Link href={props.href}>
			<GridItem {...props} style={{...menuItemStyles, ...props.style}}>
				<MenuItem className={props.className} href={props.href}>
						{props.children}
				</MenuItem>
			</GridItem>
		</Link>
	)

}

export default withTheme(Navbar)