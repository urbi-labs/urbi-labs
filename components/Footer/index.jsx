import Link from "next/link"
import { withTheme } from "styled-components"

import { FooterButton } from "../buttons"
import GridContainer from "../GridContainer"
import GridItem from "../GridItem"

import {FooterWrapper, FooterLinkItem, SocialMediaAreaButtons, SocialMediaLinkStyles, FooterAddressText, MailFooterAddress, FooterSocialMediaArea} from "./styles"
// import { useRouter } from "next/router"

// const currentPageFooterLink = {
//     color: '#0070f3',
//     textDecoration: 'underline'
// }

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

const Footer = () => {

	// const  { asPath } = useRouter();

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
					<FooterButton type='button'>Let`s talk</FooterButton>
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
						{/* <FooterLinkItem style={ asPath === '/' ? currentPage : '' }> */}
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
							<FooterSocialMediaLink newTab fileName='twitter.svg' url='http://www.twitter.com'></FooterSocialMediaLink>
							<FooterSocialMediaLink newTab fileName='instagram.svg' url='http://www.instagram.com'></FooterSocialMediaLink>
							<FooterSocialMediaLink newTab fileName='linkedin.svg' url='http://www.linkedin.com'></FooterSocialMediaLink>
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
			<img src={`/assets/${fileName}`}></img>
		</SocialMediaLinkStyles>
	)

}


export default withTheme(Footer);