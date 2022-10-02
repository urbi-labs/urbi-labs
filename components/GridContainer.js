import styled from "styled-components"

const Grid = styled.div`
	width: 100vw;
	max-width: 1295px;
	margin: 0 auto;
	padding: 0 32px;
	display: grid;
	grid-template-columns: 1fr 25px 1fr 25px 1fr 25px 1fr 25px 1fr 25px 1fr;
	${props => props.rows && `grid-template-rows: repeat(${props.rows}, auto);`}

	@media screen and (max-width:  ${props => props.theme.breakpoints.tablet}px) {
		grid-template-columns: 1fr 25px 1fr 25px 1fr 25px 1fr 25px 1fr;
		max-width: 100%;
		padding: 0 10px;	
	}

	@media screen and (max-width:  ${props => props.theme.breakpoints.mobile}px) {
		grid-template-columns: 1fr 25px 1fr 25px 1fr 25px 1fr;
		max-width: 100%;
		padding: 0 10px;
	}
`

const GridContainer = (props) => {
	return (
		<Grid style={props.style} rows={props.rows} className={props.className}>
			{props.children}
		</Grid>
	)
}

export default GridContainer