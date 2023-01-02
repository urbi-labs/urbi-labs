import React from 'react'
import GridContainer from '../GridContainer'
import GridItem from '../GridItem'
import SinglePostBlock from './SinglePostBlock'
import { PostContainer } from './styles'
import pexelsFloDahm from '/public/assets/pexels-flo-dahm-699459.jpg'

const PostsBlock = ( props ) => {

  const posts = [
		{
			name: 'test 1',
			slug: 'test-1',
      date: '22 Dec 2022',
			image: pexelsFloDahm,
      url: '#'
		},
		{
			name: 'test 2',
			slug: 'test-2',
      date: '22 Dec 2022',
			image: pexelsFloDahm,
      url: '#'
		},
		{
			name: 'test 3',
			slug: 'test-3',
      date: '22 Dec 2022',
			image: pexelsFloDahm,
      url: '#'
		},
		{
			name: 'test 4',
			slug: 'test-4',
      date: '22 Dec 2022',
			image: pexelsFloDahm,
      url: '#'
		}
	]

  let postNum = -1;
  return (

    <GridContainer>

          {posts.map((post) => {

            postNum < 3 ? postNum = postNum + 1 : postNum = 0; 
            if(postNum === 0)
              return(
                <PostContainer
                style={{marginTop: '70px'}}
                key={post.slug}
                gridPosition={{
                  desktop: {
                    columnStart: 3,
                    columnEnd: 7,
                  },
                  tablet: {
                    columnStart: 1,
                    columnEnd: 12
                  },
                  mobile: {
                    columnStart: 1,
                    columnEnd: 12
                  }
                }}>
                  <SinglePostBlock post={post}/>
                </PostContainer>
              )

            if(postNum === 1)
            return(
              <PostContainer
              key={post.slug}
              gridPosition={{
                desktop: {
                  columnStart: 8,
                  columnEnd: 12,
                },
                tablet: {
                  columnStart: 1,
                  columnEnd: 12
                },
                mobile: {
                  columnStart: 1,
                  columnEnd: 12
                }
              }}>
                <SinglePostBlock post={post}/>
              </PostContainer>
            )

            if(postNum === 2)
            return(
              <PostContainer
              style={{marginTop: '70px'}}
              key={post.slug}
              gridPosition={{
                desktop: {
                  columnStart: 1,
                  columnEnd: 5,
                },
                tablet: {
                  columnStart: 1,
                  columnEnd: 12
                },
                mobile: {
                  columnStart: 1,
                  columnEnd: 12
                }
              }}>
                <SinglePostBlock post={post}/>
              </PostContainer>
            )

            if(postNum === 3)
            return(
              <PostContainer
              key={post.slug}
              gridPosition={{
                desktop: {
                  columnStart: 6,
                  columnEnd: 10,
                },
                tablet: {
                  columnStart: 1,
                  columnEnd: 12
                },
                mobile: {
                  columnStart: 1,
                  columnEnd: 12
                }
              }}>
                <SinglePostBlock post={post}/>
              </PostContainer>
            )

          })}

    </GridContainer>

  )
}

export default PostsBlock



