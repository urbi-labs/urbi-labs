import styled, { css } from "styled-components"

export const FeaturedServicesContainer = styled.div`
	display: flex;
`

export const FeaturedService = styled.div`
	margin-right: 24px;
	flex: 1 1 auto;
	transition: flex-grow 0.3s ease;
	> .featuredService__image {
		position: relative;
		height: 400px;
		width: 100%;
	}
	> .featuredService__name {
		border: solid 1px ${props => props.theme.colors.blue};
		border-top: none;
		max-width: 100%;
		padding: 16px 8px;
		transition: max-width 0.3s ease;
		position: relative;
		&:after {
			content: '';
			background-color: ${props => props.theme.colors.blue};
			clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
			position: absolute;
			inset: 0;
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
`