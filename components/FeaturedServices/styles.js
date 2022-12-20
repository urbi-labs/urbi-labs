import styled, { css } from "styled-components"
import Link from "next/link"

export const FeaturedServicesContainer = styled.div`
	display: flex;
	padding-bottom: 140px;
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
		flex-direction: column;
		padding-bottom: 72px;
	}
`

export const FeaturedService = styled.div`
	margin-right: 24px;
	flex: 1 1 auto;
	transition: flex-grow 0.3s ease;
	> .featuredService__image {
		cursor: pointer;
		position: relative;
		height: 400px;
		width: 100%;
	}
	> .featuredService__name {
		cursor: pointer;
		border: solid 1px ${props => props.theme.colors.blue};
		border-top: none;
		max-width: 100%;
		padding: 16px 8px;
		transition: max-width 0.3s ease, color 0.3s ease;
		position: relative;
		&:after {
			content: '';
			background-color: ${props => props.theme.colors.blue};
			clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
			position: absolute;
			inset: -1px;
			z-index: -1;
			transition: clip-path 0.3s ease;
		}
	}
	&:last-of-type {
		margin-right: 0;
	}
	&:hover {
		flex-grow: 2;
		> .featuredService__name {
			max-width: 85%;
			color: #fff;
			&:after {
				transition: clip-path 0.3s ease;
				clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
			}
		}
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-bottom: 40px;
		margin-right: 0;
		> .featuredService__image {
			height: 160px;
		}
	}
`