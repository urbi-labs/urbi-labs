import Link from "next/link";
import styled from "styled-components"
import GridContainer from "../GridContainer";

export const CaseStudyItem = styled.div`
	margin-bottom: 125px;
`;

export const AnimatedLink = styled.div`
	display: flex;
	height: 400px;
	display: flex;
	align-items: flex-end;
	margin-top: -300px;
	border: solid 1px ${props => props.theme.colors.blue};
	transition: color 0.5s, background-color 0.5s;
	p {
		color: black;
		transition: all 0.5s;
	}
	${CaseStudyItem}:hover & {
		background-color: ${props => props.theme.colors.blue};
		p {
			color: #fff;
		}
	}
`;

export const CaseStudyImageContainer = styled.div`
	transition: width 0.5s;
	width: 100%;
	height: 400px;
	position: relative;
	display: block;
	${CaseStudyItem}:hover & {
		width: 200%!important;
	}
`;
