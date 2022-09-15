import styled from "styled-components"
import { withTheme } from 'styled-components'
import Link from "next/link"
import Image from "next/image"
import GridContainer from "./GridContainer"
import GridItem from "./GridItem"
import logo from '../public/assets/urbi-labs.png'

const Nav = styled.div`
	border-bottom: solid 1px ${props => props.theme.colors.lightestGray};
`

const MenuItem = styled.div`
	padding: 12px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.colors.blue};
	&.contact-us {
		color: #fff;
	}
`

const Navbar = (props) => {

	const contactUsStyles = {
		backgroundColor: props.theme.colors.blue,
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
						columnEnd: 2
					},
					mobile: {
						columnStart: 1,
						columnEnd: 2
					}
				}}
				href="/"
				>
					<Image
						src={logo}
						width="90px"
						height="56px"
					/>
				</NavbarItem>

				<NavbarItem
				href="/"
				gridPosition={{
					desktop: {
						columnStart: 3,
						columnEnd: 4
					},
					tablet: {
						columnStart: 3,
						columnEnd:4
					},
					mobile: {
						columnStart: 3,
						columnEnd:4
					}
				}}
				>
					Home
				</NavbarItem>

				<NavbarItem
				href="/"
				start="5"
				end="6"
				gridPosition={{
					desktop: {
						columnStart: 5,
						columnEnd: 6,
					},
					tablet: {
						columnStart: 5,
						columnEnd:62
					},
					mobile: {
						columnStart: 5,
						columnEnd:62
					}
				}}
				>
					Projects
				</NavbarItem>

				<NavbarItem
				href="/"
				gridPosition={{
					desktop: {
						columnStart: 7,
						columnEnd: 8
					},
					tablet: {
						columnStart: 7,
						columnEnd: 8
					},
					mobile: {
						columnStart: 7,
						columnEnd: 8
					}
				}}
				>
					Services
				</NavbarItem>

				<NavbarItem
				href="/"
				gridPosition={{
					desktop: {
						columnStart: 9,
						columnEnd: 10
					},
					tablet: {
						columnStart: 9,
						columnEnd: 10
					},
					mobile: {
						columnStart: 9,
						columnEnd: 10
					}
				}}
				>
					Content
				</NavbarItem>

				<NavbarItem
				href="contact-us"
				gridPosition={{
					desktop: {
						columnStart: 11,
						columnEnd: 12,
					},
					tablet: {
						columnStart: 11,
						columnEnd:12
					},
					mobile: {
						columnStart: 11,
						columnEnd:12
					}
				}}
				className="contact-us"
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
		alignItems: "center",
	}

	return (
		<GridItem {...props} style={{...menuItemStyles, ...props.style}}>
			<MenuItem className={props.className}>
				<Link href={props.href}>
					{props.children}
				</Link>
			</MenuItem>
		</GridItem>
	)

}

export default withTheme(Navbar)