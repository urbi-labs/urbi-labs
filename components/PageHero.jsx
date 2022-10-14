import styled from "styled-components"
import GridContainer from "./GridContainer"
import GridItem from "./GridItem"

const MainContainer = styled(GridContainer)` 
	padding-top: 125px; 
	padding-bottom: 125px; 
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		padding-top: 90px; 
		padding-bottom: 90px; 
	}
`

const BlueSpan = styled.span` 
    color: ${props => props.theme.colors.blue};
`

const DarkGraySpan = styled.span` 
    color: ${props => props.theme.colors.darkestGray};
`

const Subtitle = styled.div` 
	color: ${props => props.theme.colors.subtitleGray};
	font-weight: 300;
	font-size: 16px;
	line-height: 24px; 
    margin-bottom: 40px;
`

const PageHero = ( props ) => {

  return (
    <MainContainer>
        <GridItem 
            gridPosition={{
                desktop: {
                    columnStart: 3,
                    columnEnd: 8,
                },
                tablet: {
                    columnStart: 1,
                    columnEnd: 10
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 8
                }
            }}
        >
            <h1><DarkGraySpan>{props.grayText}</DarkGraySpan> <BlueSpan>{props.blueText}</BlueSpan><DarkGraySpan>.</DarkGraySpan></h1>
        </GridItem>
        <GridItem 
            gridPosition={{
                desktop: {
                    columnStart: 9,
                    columnEnd: 10,
                },
                tablet: {
                    columnStart: 1,
                    columnEnd: 5
                },
                mobile: {
                    columnStart: 1,
                    columnEnd: 5
                }
            }}
            style={{alignSelf:'flex-end'}}
        >
            <Subtitle>{props.subtitle}</Subtitle>
        </GridItem>
    </MainContainer>
  )
}

export default PageHero