import styled from "styled-components"

const Item = styled.div`
	grid-column-start: ${props => props.start || 'auto'};
	grid-column-end: ${props => props.end || 'auto'};
`

const GridItem = (props) => {
	return (
		<Item start={props.start} end={props.end} style={props.style}>
			{props.children}
		</Item>
	)
}

export default GridItem