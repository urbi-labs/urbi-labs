import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import GridContainer from '../GridContainer';
import { CaseStudyItem, AnimatedLink, CaseStudyImageContainer } from './styles'

import pexelsFloDahm from '/public/assets/pexels-flo-dahm-699459.jpg'

const CaseStudyLink = (props) => {

	const router = useRouter()

	const [hovered, setHovered] = useState(false);
	const positionLeft = parseInt(props.index) % 2 === 0 ? false : true

	const CaseStudyLinkPosition = {
		desktop: {
			columnStart: 1,
			columnEnd: 8,
		},
		tablet: {
			columnStart: 1,
			columnEnd: 9
		},
		mobile: {
			columnStart: 1,
			columnEnd: 12
		}
	}

	const CaseStudyImagePosition = {
		desktop: {
			columnStart: 1,
			columnEnd: 7,
		},
		tablet: {
			columnStart: 1,
			columnEnd: 7
		},
		mobile: {
			columnStart: 1,
			columnEnd: 12
		}
	}

	return (

		<CaseStudyItem>

			<GridContainer>

				<CaseStudyImageContainer
					gridPosition={CaseStudyImagePosition}
					onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
					hovered={hovered}
				>
					<Link href="#">
						<Image
							src={pexelsFloDahm}
							layout='fill'
							objectFit='cover'
						/>
					</Link>
				</CaseStudyImageContainer>

				<AnimatedLink
					gridPosition={CaseStudyLinkPosition}
					onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
					hovered={hovered}
					onClick={() => router.push('#')}
				>
					<div className="titleContainer">
						<p className="h2 title">Feis.link</p>
						<p className="category">Web Development</p>
					</div>
				</AnimatedLink>

			</GridContainer>

		</CaseStudyItem>

	)
}

export default CaseStudyLink;