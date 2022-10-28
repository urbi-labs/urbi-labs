import { getCaseStudies, getPosts } from "../../services/getPosts"

const CaseStudies = (props) => {
	return (
		<>

			<h1>case studies</h1>

			{console.log(props)}

		</>
	)
}

export async function getStaticProps() {
	// Instead of fetching your `/api` route you can call the same
	// function directly in `getStaticProps`
	const caseStudies = await getPosts()
  
	// Props returned will be passed to the page component
	return { 
		props: { caseStudies } 
	}

  }

export default CaseStudies