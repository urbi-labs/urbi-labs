import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SinglePostImage, SinglePostTitle } from './styles'

const SinglePostBlock = ( props) => {

  return (
    <Link href={props.post.url} passHref>
		<div className="singlePost__main">
			<SinglePostImage>
				{/* <Link href="#"> */}
					<Image
						src={props.post.image}
						layout='fill'
						objectFit='cover'
					/>
				{/* </Link> */}
			</SinglePostImage>
			{/* <Link href="#"> */}
				<SinglePostTitle className='singlePost__text'>
					<p className='singlePost__date'>{props.post.date}</p>
					<p className='singlePost__title'>{props.post.name}</p>
				</SinglePostTitle>
			{/* </Link> */}
		</div>
	</Link>
  )
}

export default SinglePostBlock