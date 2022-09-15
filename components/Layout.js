import Navbar from './Navbar'
import Footer from './Footer'
import LayoutBackground from './Background'

export default function Layout({ children }) {
	return (
		<>
			<LayoutBackground />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}