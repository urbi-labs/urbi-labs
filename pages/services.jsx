import Head from 'next/head'
import React from 'react'
import PageHero from '../components/PageHero'

const ServicesPage = () => {
  return (
    <div>
      <Head>
          <title>Urbi Labs - Services</title>
          <meta name="description" content="Services" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHero 
        grayText="We can" 
        blueText="solve all your needs" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  )
}

export default ServicesPage