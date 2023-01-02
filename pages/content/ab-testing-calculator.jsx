import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import GridContainer from '../../components/GridContainer'
import GridItem from '../../components/GridItem'
import ABCalculator from '../../components/ABCalculator'

const MainContainer = styled(GridContainer)` 
	padding-top: 125px; 
	padding-bottom: 125px; 
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		padding-top: 90px; 
		padding-bottom: 90px; 
	}
`

const Title = styled.h1` 
    margin: 0;
    color: ${props => props.theme.colors.darkestGray};
`

const Description = styled.p` 
    color: ${props => props.theme.colors.subtitleGray};
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
`

const ABTestingCalculator = () => {
  return (
    <div>
        
        <Head>
            <title>Urbi Labs - A/B Testing Calculator</title>
            <meta name="description" content="testing-calculator" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer>
            <GridItem
                gridPosition={{
                    desktop: {
                        columnStart: 3,
                        columnEnd: 6,
                    },
                    tablet: {
                        columnStart: 1,
                        columnEnd: 5
                    },
                    mobile: {
                        columnStart: 1,
                        columnEnd: 12
                    }
                }}
            >
                <Title>A/B Testing Calculator</Title>
                <Description>Use this calculator to determine if the result of an A/B test is statistically significant and make decisions with confidence. Great for measuring experiments on websites and ad campaigns such as those on Google and Facebook Ads.</Description>
            </GridItem>            
        </MainContainer>
        <ABCalculator/>
    </div>

  )
}

export default ABTestingCalculator