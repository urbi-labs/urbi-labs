import Image from 'next/image';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useState } from 'react';
import GridContainer from '../GridContainer';


const Animator = dynamic(
	import("react-scroll-motion").then((it) => it.Animator),
	{ ssr: false }
);

import { batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import { CaseStudyItem, BoxLink, CaseStudyImageContainer, CtaButton } from './styles'

import pexelsFloDahm from '/public/assets/pexels-flo-dahm-699459.jpg'

const CaseStudyLink = (props) => {

	const router = useRouter()

	const [hovered, setHovered] = useState(false);
	const positionLeft = parseInt(props.index) % 2 === 0 ? false : true

	const CaseStudyLinkPosition = {
		desktop: {
			columnStart: 1,
			columnEnd: 8
		},
		tablet: {
			columnStart: 1,
			columnEnd: 8
		},
		mobile: {
			columnStart: 1,
			columnEnd: 12
		}
	}

	const CaseStudyImagePosition = {
		desktop: {
			columnStart: 1,
			columnEnd: 6,
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

	const FadeUp = batch(Fade(), Move(), Sticky());

	return (

			<CaseStudyItem>

				<GridContainer style={{
					direction: !positionLeft && 'rtl'
				}}>

					<CaseStudyImageContainer
						gridPosition={CaseStudyImagePosition}
						onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
						hovered={hovered}
						positionLeft={positionLeft}
					>
						<Link href="#">
							<Image
								src={pexelsFloDahm}
								layout='fill'
								objectFit='cover'
							/>
						</Link>
					</CaseStudyImageContainer>

					<BoxLink
						gridPosition={CaseStudyLinkPosition}
						onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
						hovered={hovered}
						onClick={() => router.push('#')}
					>
						<div className="textContainer">
							<div>
								<p className="h2 caseStudy__Title">Project Name</p>
								<p className="caseStudy__Category">Web Development</p>
							</div>
							<CtaButton primary={!hovered} hasArrow>
								Read More
							</CtaButton>
						</div>

					</BoxLink>

				</GridContainer>

			</CaseStudyItem>

	)
}

export default CaseStudyLink;