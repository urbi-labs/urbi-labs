import Head from 'next/head'
import React from 'react'
import PageHero from '../components/PageHero'

const ProjectsPage = () => {
  return (
    <div>
      <Head>
          <title>Urbi Labs - Projects</title>
          <meta name="description" content="Projects" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <PageHero 
        grayText="We work to create" 
        blueText="unique projects" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> 
    </div>
  )
}

export default ProjectsPage