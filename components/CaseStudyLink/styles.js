import styled, { css } from "styled-components"
import GridItem from "../GridItem";
import { StyledLink } from '../CustomButtons';

export const CaseStudyItem = styled.div`
	padding-bottom: 125px;
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
		padding-bottom: 80px;
	}
`;

export const BoxLink = styled(GridItem)`
	display: flex;
	display: flex;
	align-items: flex-end;
	margin-top: -258px;
	padding-top: 258px;
	border: solid 1px ${props => props.theme.colors.blue};
	transition: color 0.5s, background-color 0.5s;
	position: relative;
	cursor: pointer;

	.textContainer {
		display: grid;
		grid-template-columns: 4fr 3fr;
		grid-template-rows: 1fr;
		padding: 32px 0;
		padding-left: 5%;
		padding-right: 5%;
		width: 100%;
		direction: ltr;
	}

	.caseStudy__Title,
	.caseStudy__Category {
		transition: color 0.5s;
		margin: 0;
	}

	.caseStudy__Title {
		color: ${props => props.theme.colors.darkestGray};
	}

	.caseStudy__Category {
		color: ${props => props.theme.colors.blue};
		font-weight: 300;
	}

	${props => props.hovered && css`
		background-color: ${props => props.theme.colors.blue};
		.caseStudy__Title,
		.caseStudy__Category {
			color: #fff;
		}
	`}

	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
		.textContainer {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			padding-left: 12%;
			padding-right: 12%;
		}
	}

`;

export const CtaButton = styled(StyledLink)`
	transition: color 0.5s;
	white-space: nowrap;
    margin-top: 0;
    align-self: center;
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
		text-align: left;
	}

`;

export const CaseStudyImageContainer = styled(GridItem)`
	transition: width 0.5s, transform 0.465s;
	width: 100%;
	height: 280px;
	position: relative;
	display: block;
	z-index: 2;
	cursor: pointer;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}px) {
		height: 400px;
		${props => props.hovered && css`
			width: 150%;
		`}
	}
`;
