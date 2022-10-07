import styled from "styled-components"

const Item = styled.div`

	${props => props.gridPosition && props.gridPosition.desktop && `
		grid-column-start: ${props.gridPosition.desktop.columnStart || 'auto'};
		grid-column-end: ${props.gridPosition.desktop.columnEnd || 'auto'};
		grid-row-start: ${props.gridPosition.desktop.rowStart || 'auto'};
		grid-row-end: ${props.gridPosition.desktop.rowEnd || 'auto'};
	`}

	${props => props.gridPosition.tablet && `
		@media screen and (max-width:  ${props.theme.breakpoints.tablet}px) {
			grid-column-start: ${props.gridPosition.tablet.columnStart || 'auto'};
			grid-column-end: ${props.gridPosition.tablet.columnEnd || 'auto'};
			grid-row-start: ${props.gridPosition.tablet.rowStart || 'auto'};
			grid-row-end: ${props.gridPosition.tablet.rowEnd || 'auto'};
		}
	`}
	
	${props => props.gridPosition.mobile && `
		@media screen and (max-width:  ${props.theme.breakpoints.mobile}px) {
			grid-column-start: ${props.gridPosition.mobile.columnStart || 'auto'};
			grid-column-end: ${props.gridPosition.mobile.columnEnd || 'auto'};
			grid-row-start: ${props.gridPosition.mobile.rowStart || 'auto'};
			grid-row-end: ${props.gridPosition.mobile.rowEnd || 'auto'};
		}
	`}
`

const GridItem = (props) => {
	return (
		<Item gridPosition={props.gridPosition} className={props.className} style={props.style} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>			
			{props.children}
		</Item>
	)
}

export default GridItem