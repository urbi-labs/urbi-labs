import styled from "styled-components"

// Wrapper del Footer para definir fondo y posicion
export const FooterWrapper = styled.footer`
	background-color: ${props => props.theme.colors.blue};
	padding: 30px 0;
`;

// Direccion ubicada en el footer
export const FooterAddressText = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        text-align: center;
        margin: 20px 0;
    }
`;

export const MailFooterAddress = styled.a`
    /* padding-right: 40px; */
    color: #fff;
    font-size: 16px;
    font-weight: 300;	
    vertical-align: super;
    line-height: 24px;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        /* padding-right: 0; */
        margin: 20px 0;
    }
`;

// Links del Footer
export const FooterLinkItem = styled.a`
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 0.015em;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		padding: 20px 0;
	}
`;

//Contenedor de mail y social media icons
export const FooterSocialMediaArea = styled.div`
    text-align: right;
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		text-align: center;
	}
`;

// Contenedor de los 3 botones de social media
export const SocialMediaAreaButtons = styled.div`
	display: inline-flex;
    justify-content: center;
	padding-left: 30px;
    vertical-align: super;
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		width: 100%;
        margin: 20px 0;
		padding-left: 0px;
	}
`;

// Estilos de cada boton de social media
export const SocialMediaLinkStyles = styled.a`
	padding-right: 10px;
	height: 18px;
	width: 24px;
	&:last-child{
		padding-right: 0;
	}
	
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
        height: 26px;
		width: 32px;
		
	}
`;

