import Link from "next/link";
import styled, {css} from "styled-components"
import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

export const CaseStudyItem = styled.div`
	margin-bottom: 125px;
`;

export const AnimatedLink = styled(GridItem)`
	display: flex;
	height: 400px;
	display: flex;
	align-items: flex-end;
	margin-top: -258px;
	border: solid 1px ${props => props.theme.colors.blue};
	transition: color 0.5s, background-color 0.5s;
	position: relative;
	cursor: pointer;
	padding-left: 118px;
	.titleContainer {
		padding: 32px 0;
	}

	.title,
	.category {
		transition: color 0.5s;
	}

	.title {
		margin: 0;
		color: ${props => props.theme.colors.darkestGray};
	}

	.category {
		margin: 0;
		color: ${props => props.theme.colors.blue};
	}

	${props => props.hovered && css`
		background-color: ${props => props.theme.colors.blue};
		.title,
		.category {
			color: #fff;
		}
	`}
`;

export const CaseStudyImageContainer = styled(GridItem)`
	transition: width 0.5s;
	transition-delay: 0.2s;
	width: 100%;
	height: 400px;
	position: relative;
	display: block;
	z-index: 2;
	cursor: pointer;
	${props => props.hovered && css`
		width: 150%!important;
	`} 
`;
