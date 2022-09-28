import Link from "next/link"
import Image from "next/image"
import { withTheme } from "styled-components"

import { PrimaryButton } from "../Buttons"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"

import linkedinLogo from '/public/assets/linkedin.svg'

import {FooterWrapper, FooterLinkItem, SocialMediaAreaButtons, SocialMediaLinkStyles, FooterAddressText, MailFooterAddress, FooterSocialMediaArea} from "./styles"

// Todos los elementos del footer
const footerMenuItemStyles = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

// Arrea al final del footer, contiene Direccion y Social Medias
const bottomFooterArea = {
	marginTop: '120px',
}

const Footer = ( props ) => {

	const openContactForm2 = () => {
		props.openContactForm();
	}

	return (
		<FooterWrapper>
			<GridContainer>

				<GridItem gridPosition={{
					desktop: {
						columnStart: 1,
						columnEnd: 6,
						rowStart: 1,
						rowEnd: 3
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<h2 className="h2">Tell us about your project</h2>
				</GridItem>

				<GridItem gridPosition={{
					desktop: {
						columnStart: 1,
						columnEnd: 2,
						rowStart: 3,
						rowEnd: 4
					},
					tablet: {
						columnStart: 3,
						columnEnd:8
					},
					mobile: {
						columnStart: 2,
						columnEnd:7
					}
				}}>
					<PrimaryButton mt='30px' onClick={() => openContactForm2()}>Let`s talk</PrimaryButton>
				</GridItem>

				<GridItem style={{...footerMenuItemStyles}} gridPosition={{
					desktop: {
						columnStart: 7,
						columnEnd: 8,
						rowStart: 1,
						rowEnd: 1
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<Link href='/' passHref>
						<FooterLinkItem>
							Home
						</FooterLinkItem>
					</Link>
				</GridItem>
				<GridItem style={{...footerMenuItemStyles}} gridPosition={{
					desktop: {
						columnStart: 9,
						columnEnd: 10,
						rowStart: 1,
						rowEnd: 1
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<Link href='/projects' passHref>
						<FooterLinkItem>
							Projects
						</FooterLinkItem>
					</Link>
				</GridItem>
				<GridItem style={{...footerMenuItemStyles}} gridPosition={{
					desktop: {
						columnStart: 11,
						columnEnd: 12,
						rowStart: 1,
						rowEnd: 1
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<Link href='/resources' passHref>
						<FooterLinkItem>
							Resources
						</FooterLinkItem>
					</Link>
				</GridItem>
				<GridItem style={{...footerMenuItemStyles}} gridPosition={{
					desktop: {
						columnStart: 9,
						columnEnd: 10,
						rowStart: 2,
						rowEnd: 2
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<Link href='/services' passHref>
						<FooterLinkItem>
							Services
						</FooterLinkItem>
					</Link>
				</GridItem>
				<GridItem style={{...footerMenuItemStyles}} gridPosition={{
					desktop: {
						columnStart:11,
						columnEnd: 12,
						rowStart: 2,
						rowEnd: 2
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<Link href='/blog' passHref>
						<FooterLinkItem>
							Blog
						</FooterLinkItem>
					</Link>
				</GridItem>

			</GridContainer>

			<GridContainer style={{...bottomFooterArea}}>	
				
				<GridItem gridPosition={{
					desktop: {
						columnStart:1,
						columnEnd: 6
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<FooterAddressText>Dorrego 864, Buenos Aires, Argentina</FooterAddressText>
				</GridItem>

				<GridItem gridPosition={{
					desktop: {
						columnStart:7,
						columnEnd: 12
					},
					tablet: {
						columnStart: 1,
						columnEnd:12
					},
					mobile: {
						columnStart: 1,
						columnEnd:12
					}
				}}>
					<FooterSocialMediaArea>
						<Link href='mailto:info@urbilabs.com' passHref>
							<MailFooterAddress>Info@urbilabs.com</MailFooterAddress>
						</Link>
						<SocialMediaAreaButtons>
							<FooterSocialMediaLink newTab fileName='linkedin.svg' url='https://ar.linkedin.com/company/urbi-digital'></FooterSocialMediaLink>
						</SocialMediaAreaButtons>
					</FooterSocialMediaArea>
				</GridItem>

			</GridContainer>
		</FooterWrapper>	
	)
}

const FooterSocialMediaLink = ({fileName, url , newTab}) => {	
	
	return (
		<SocialMediaLinkStyles  target={`${newTab ? '_blank' : '_self'}`} href={`${url}`}>
			<Image
				src={linkedinLogo}	
				alt="LinkedIn Icon"
				layout="responsive"
			></Image>
		</SocialMediaLinkStyles>
	)

}


export default withTheme(Footer);