import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import useWindowSize from '../../services/windowSize';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import { CaseStudyItem, AnimatedLink, CaseStudyImageContainer } from './styles'

import pexelsFloDahm from '/public/assets/pexels-flo-dahm-699459.jpg'

const CaseStudyLink = (props) => {

	const [animatedLinkWidth, setAnimatedLinkWidth] = useState(0)
	const positionLeft = parseInt(props.index) % 2 === 0 ? false : true

	const animatedLink = useRef(null)
	const windowSize = useWindowSize()

	const CaseStudyLinkPosition = {
		desktop: {
			columnStart: 1,
			columnEnd: 6,
		},
		tablet: {
			columnStart: 1,
			columnEnd: 7
		},
		mobile: {
			columnStart: 11,
			columnEnd: 12
		}
	}

	const CaseStudyImagePosition = {
		desktop: {
			columnStart: 1,
			columnEnd: 5,
		},
		tablet: {
			columnStart: 1,
			columnEnd: 7
		},
		mobile: {
			columnStart: 11,
			columnEnd: 12
		}
	}

	useEffect(() => {
		setAnimatedLinkWidth(animatedLink.current.offsetWidth);
	}, [windowSize]);

	return (

		<Link href="#">
			<CaseStudyItem>
				<GridContainer>
					<GridItem gridPosition={CaseStudyImagePosition}>

						<CaseStudyImageContainer href='#'>

							<Image
								src={pexelsFloDahm}
								layout='fill'
								objectFit='cover'
							/>

						</CaseStudyImageContainer>

					</GridItem>

					<GridItem gridPosition={CaseStudyLinkPosition}>
						<AnimatedLink href="#" passHref>
							<p className="h2" ref={animatedLink}>{JSON.stringify(positionLeft)}</p>
						</AnimatedLink>
					</GridItem>
				</GridContainer>
			</CaseStudyItem>
		</Link>
	)
}

export default CaseStudyLink;