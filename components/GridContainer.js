import styled from "styled-components"

const Grid = styled.div`
	width: 100vw;
	max-width: 1295px;
	margin: 0 auto;
	padding: 0 32px;
	display: grid;
	grid-template-columns: 1fr 25px 1fr 25px 1fr 25px 1fr 25px 1fr 25px 1fr;
`

const GridContainer = (props) => {
	return (
		<Grid style={props.style}>
			{props.children}
		</Grid>
	)
}

export default GridContainer