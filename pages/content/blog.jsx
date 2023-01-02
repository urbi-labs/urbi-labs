import Head from 'next/head'
import PageHero from '../../components/PageHero'
import PostsBlock from '../../components/PostsBlock'

const BlogPage = () => {
  return (
    <div>
      <Head>
          <title>Urbi Labs - Blog</title>
          <meta name="description" content="Blog" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <PageHero 
        grayText="Many things happen" 
        blueText="in the world" 
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> 

      <PostsBlock/>
    </div>
  )
}

export default BlogPage