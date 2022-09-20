import styled from "styled-components"

// Boton del Footer
export const FooterButtonComponent = styled.button`
	border: solid 1px #fff;
	background-color: ${props => props.theme.colors.blue} ;
	font-size: 16px;
	font-weight: 600 ;
	color: #fff;
	width: 100%;
	cursor: pointer;
	font-family: "Sora", sans-serif;
	height: 64px;
	margin-top: 30px;
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		margin-bottom: 60px;
	}
`

export const FooterButton = ( {children} ) => {
  return (
    <FooterButtonComponent type='button'>{children}</FooterButtonComponent>
  )
}