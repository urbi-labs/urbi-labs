import { useState, useEffect } from "react"
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

const LayoutBackground = () => {

	const size = useWindowSize()

	const [boxCount, setBoxcount] = useState(11)

	useEffect(() => {
		if(size.width > 768) {
			setBoxcount(11)
		} else if(size.width <= 768 && size.width > 480) {
			setBoxcount(9)
		} else if (size.width <= 480) {
			setBoxcount(7)
		}
	}, [size]);

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

export default LayoutBackground