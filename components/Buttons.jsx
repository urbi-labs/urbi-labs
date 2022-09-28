import styled from "styled-components"
import whiteNextArrow from '/public/assets/white-next-arrow.svg'

// Boton del Footer
export const PrimaryButton = styled.button`
	border: solid 1px #fff;
	background-color: ${props => props.theme.colors.blue} ;
	font-size: 16px;
	font-weight: 600 ;
	color: #fff;
	width: 100%;
	cursor: pointer;
	font-family: "Sora", sans-serif;
	height: 64px;
	margin-top: ${props => props.mt ? props.mt : '30px'};
	&:after{
		padding-left: 10px;
		content: ${(props) => (props.hasArrow && `url(${whiteNextArrow.src})`)};
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		margin-bottom: 60px;
	}
`

export const StyledLink = styled.a` 

`