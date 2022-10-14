import { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import styled from "styled-components"
import GridContainer from "./GridContainer"
import useWindowSize from "../services/windowSize"

const Box = styled.div`
	grid-column: span 1;
	border-left: solid 1px #F1F2F3;
	&:last-child {
		border-right: solid 1px #F1F2F3;
	}
`

const LayoutBackground = (props) => {

	const size = useWindowSize()

	const [boxCount, setBoxcount] = useState(11)

	useEffect(() => {
		if(size.width > props.theme.breakpoints.tablet) {
			setBoxcount(11)
		} else if(size.width <= props.theme.breakpoints.tablet && size.width > props.theme.breakpoints.mobile) {
			setBoxcount(9)
		} else if (size.width <= props.theme.breakpoints.mobile) {
			setBoxcount(7)
		}
	}, [size,props.theme.breakpoints.tablet,props.theme.breakpoints.mobile]);

	const backgroundGridStyles = {
		position: 'fixed',
		inset: '0',
		zIndex: '-1',
	}

	return (
		<GridContainer style={backgroundGridStyles}>
			{[...Array(boxCount)].map((value, index) => (
				<Box key={index}/>
			))}
		</GridContainer>
	)
}

export default withTheme(LayoutBackground)