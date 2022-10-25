import { BannerContainer } from './styles';

const Banner = (props) => {

	return (

			<BannerContainer>

				<div className="container">
					{props.children}
				</div>

			</BannerContainer>

	)
}

export default Banner;