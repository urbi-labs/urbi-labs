async function fetchAPI(query, { variables } = {}) {

	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(process.env.WORDPRESS_GRAPHQL_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getPosts() {
	const data = await fetchAPI(
		`query AllPosts {
          	posts(first: 20) {
				nodes {
					title
					id
					date
					excerpt
					categories {
					  nodes {
						id
						slug
						name
					  }
					}
				}
				pageInfo {
					hasNextPage
					endCursor
					hasPreviousPage
					startCursor
				}
          	}
        }
      `,
		{
			variables: {},
		}
	);
	return data?.posts;
}

export async function getSinglePost(id) {
	const data = await fetchAPI(`
    query getSinglePost($id:ID!){
        post(id:$id){           
              title
              categories{
              edges{
                  node{
                  name
                  }
              }
              }
              excerpt
              content
              slug
              id
              author {
                node {
                  name
                  firstName
                  lastName
                }
              }
        }
      }
    `, { id });

	return data?.post;
}

export async function getCaseStudies() {
	const data = await fetchAPI(
		`query AllCaseStudies {
			caseStudies(first: 10) {
				nodes {
				  date
				  id
				  title
				  content
				}
				pageInfo {
					startCursor
					hasPreviousPage
					hasNextPage
					endCursor
				}
			}
        }
      `,
		{
			variables: {},
		}
	);
	return data?.caseStudies;
}

export async function getSingleCaseStudy(id) {
	const data = await fetchAPI(`
    query getSingleCaseStudy($id:ID!){
        caseStudy(id:$id){           
              title
              categories{
              edges{
                  node{
                  name
                  }
              }
              }
              excerpt
              content
              slug
              id
              author {
                node {
                  name
                  firstName
                  lastName
                }
              }
        }
      }
    `, { id });

	return data?.post;
}