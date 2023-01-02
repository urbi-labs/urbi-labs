import Link from 'next/link'
import React from 'react'
import GridItem from '../GridItem'
import { ResourceBox, ResourceDescription, ResourceTitle } from './styles'

const ResourceBlock = ( props ) => {
  return (
    
      <GridItem gridPosition={props.gridPosition}>
        <Link href={props.href} passHref>
            <ResourceBox>
                <ResourceTitle>{props.title}</ResourceTitle>
                <ResourceDescription>{props.description}</ResourceDescription>
            </ResourceBox>
        </Link>
    </GridItem>  
  )
}

export default ResourceBlock