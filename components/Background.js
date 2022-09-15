import styled from "styled-components"
import GridContainer from "./GridContainer"

const Box = styled.div`
	grid-column: span 1;
	border-left: solid 1px #F1F2F3;
	&:last-child {
		border-right: solid 1px #F1F2F3;
	}
`

const LayoutBackground = () => {

	const backgroundGridStyles = {
		position: 'fixed',
		inset: '0',
		zIndex: '-1',
	}

	return (
		<GridContainer style={backgroundGridStyles}>
			{[...Array(11)].map((value, index) => (
				<Box key={index}/>
			))}
		</GridContainer>
	)
}

export default LayoutBackground