import Image from 'next/image';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useState } from 'react';
import GridContainer from '../GridContainer';

import pexelsFloDahm from '/public/assets/pexels-flo-dahm-699459.jpg'

import { FeaturedServicesContainer, FeaturedService } from './styles'

const FeaturedServices = (props) => {

	const services = [
		{
			name: 'test 1',
			slug: 'test-1',
			image: pexelsFloDahm
		},
		{
			name: 'test 2',
			slug: 'test-2',
			image: pexelsFloDahm
		},
		{
			name: 'test 3',
			slug: 'test-3',
			image: pexelsFloDahm
		},
		{
			name: 'test 4',
			slug: 'test-4',
			image: pexelsFloDahm
		}
	]

	return (

		<FeaturedServicesContainer className="container">
			{services.map(service => (

				<FeaturedService>

						<div className="featuredService__image">
							<Link href="#">
							<Image
							src={service.image}
							layout='fill'
							objectFit='cover'
							/>
							</Link>
						</div>

						<Link href="#">
							<div className="featuredService__name">
								<p>{service.name}</p>
							</div>
						</Link>

				</FeaturedService>

			))}
		</FeaturedServicesContainer>

	)
}

export default FeaturedServices;