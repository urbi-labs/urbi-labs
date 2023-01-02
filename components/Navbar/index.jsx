
import useWindowSize from "../../services/windowSize"
import React, { useState, useEffect } from "react"

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
import MobileMenu from "./MobileMenu"
import { useAsideContext } from "../../providers/AsideContext"



const Navbar = ( props ) => {

	const size = useWindowSize()

	const [isMobile, setIsMobile] = useState(true);

	// Render o no del menu mobile o desktop
	useEffect(() => {

		setIsMobile(true);
		
		if(size.width > props.theme.breakpoints.tablet) {
			setIsMobile(false);
		} 
	}, [size,props.theme.breakpoints.tablet]);

	const {showMenu, closeMenu, showContactForm} = useAsideContext();

	// Funcion para el form de contacto mobile. Cierra el Menu y abre el Contact Form
	const handleContactFormClick = () => {
        closeMenu()
		showContactForm();
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
					<Link href="/" passHref>
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
						
						>
							<Image
								src={logo}
								width="90px"
								height="56px"
								alt="UrbiLabs"
							/>
						</NavbarItem>
					</Link>
					<Link href="/" passHref>
						<NavbarItem
						style={ asPath === '/' ? currentPage : '' }
						
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
					</Link>
					<Link href="/projects" passHref>
						<NavbarItem
						style={ asPath === '/projects' ? currentPage : '' }
						
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
					</Link>
					<Link href="/services">
						<NavbarItem
						style={ asPath === '/services' ? currentPage : '' }
						
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
					</Link>
					<Link href="/content">
						<NavbarItem
						style={ asPath === '/content' ? currentPage : '' }
						
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
					</Link>
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
						onClick={() => handleContactFormClick()}
					>
						<MenuItem className='contact-us' >Contact us</MenuItem>
					</GridItem>					

				</GridContainer>
			</Nav>
			{showServicesSubmenuNav && 
				(<SubMenuNav onMouseEnter={() => setShowServicesSubmenuNav(true)} onMouseLeave={() => setShowServicesSubmenuNav(false)}>
					<GridContainer>
						<Link href="/services/web-design">
							<NavbarItem
								
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
						</Link>
						<Link href="/services/web-development">
							<NavbarItem
								
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
						</Link>
						<Link href="/services/crm-integration">
							<NavbarItem
								
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
						</Link>
						<Link href="/services/conversion-rate-optimization">
							<NavbarItem
								
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
						</Link>
					</GridContainer>
				</SubMenuNav>
			)}
			{showContentSubmenuNav && 
				(<SubMenuNav onMouseEnter={() => setShowContentSubmenuNav(true)} onMouseLeave={() => setShowContentSubmenuNav(false)}>
					<GridContainer>
						<Link href="/content/resources">
							<NavbarItem
								
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
						</Link>
						<Link href="/content/blog">
							<NavbarItem
								
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
						</Link>
					</GridContainer>
				</SubMenuNav>
			)}
			</>
		)
	} 

	return (
		<Nav>
			<GridContainer>
				<Link href="/">
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
						
						>
							<Image
								src={logo}
								width="90px"
								height="56px"
								alt="UrbiLabs"
							/>
						</NavbarItem>
					</Link>
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
						onClick={showMenu}
					>
						<Image
							layout="responsive" 
							src={mobileMenuIcon}
							alt="Hamburguer Icon"
						/>
					</MobileMenuIcon>
				</GridItem>
			</GridContainer>	
		</Nav>
	)

}

const NavbarItem = React.forwardRef((props, ref) => {

	const menuItemStyles = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	}

	return (
		// <Link href={props.href}>
			<GridItem {...props} style={{...menuItemStyles, ...props.style}}>
				<MenuItem className={props.className}>
						{props.children}
				</MenuItem>
			</GridItem>
		// </Link>
	)

})

export default withTheme(Navbar)