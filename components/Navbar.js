import styled from "styled-components"
import { withTheme } from 'styled-components'
import Link from "next/link"
import Image from "next/image"
import GridContainer from "./GridContainer"
import GridItem from "./GridItem"

const Nav = styled.div`
	border-bottom: solid 1px ${props => props.theme.colors.lightestGray};
`

const MenuItem = styled.div`
	padding: 12px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Navbar = (props) => {

	const contactUsStyles = {
		backgroundColor: props.theme.colors.blue,
		color: "#fff",
	}

	return (
		<Nav>
			<GridContainer>

				<NavbarItem start="1" end="2" href="/">
					<Image
						src="/assets/urbi-labs.png"
						layout="fixed"
						width="90px"
						height="56px"

					/>
				</NavbarItem>

				<NavbarItem
				href="/"
				start="3"
				end="4"
				>
					Home
				</NavbarItem>

				<NavbarItem
				href="/"
				start="5"
				end="6"
				>
					Projects
				</NavbarItem>

				<NavbarItem
				href="/"
				start="7"
				end="8"
				>
					Services
				</NavbarItem>

				<NavbarItem
				href="/"
				start="9"
				end="10"
				>
					Content
				</NavbarItem>

				<NavbarItem
				href="contact-us"
				start="11"
				end="12"
				style={contactUsStyles}
				>
					Contact us
				</NavbarItem>
			</GridContainer>
		</Nav>
	)
}

const NavbarItem = (props) => {

	const menuItemStyles = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}

	return (
		<GridItem {...props} style={{...props.style, ...menuItemStyles}}>
			<MenuItem>
				<Link href={props.href}>
					{props.children}
				</Link>
			</MenuItem>
		</GridItem>
	)

}

export default withTheme(Navbar)