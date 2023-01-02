import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import GridContainer from '../../components/GridContainer'
import PageHero from '../../components/PageHero'
import ResourceBlock from '../../components/ResourceBlock'

const MainContainer = styled(GridContainer)` 
	padding-top: 125px; 
	padding-bottom: 125px; 
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px){
		padding-top: 90px; 
		padding-bottom: 90px; 
	}
`

const ResourcesPage = () => {
  return (
    <div>
      <Head>
          <title>Urbi Labs - Resources</title>
          <meta name="description" content="Resources" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <PageHero 
        grayText="Many things happen" 
        blueText="in the world" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> 

      <MainContainer>
        <ResourceBlock
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
          title="A/B Testing Calculator"
          description="Find out if your A/B test is statistically significant and make decisions with confidence."
          href="ab-testing-calculator"
        />
      </MainContainer>
    </div>
  )
}

export default ResourcesPage