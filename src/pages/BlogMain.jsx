import styled from 'styled-components'
import tw from 'tailwind-styled-components/dist/tailwind'
import { BlogLinks, SignupBanner, EditorsPicks, LatestIn, Newsletter,Footer, BlogHeader, Recents } from '../components'


const Container = tw.section`
w-100vw
`
const Layout = tw.div`
max-w-[1280px]
px-[25px]
mx-auto
h-full
`



const BlogMain = () => {
  return (
    <Container>
      <Layout>
        <BlogLinks active = "latest"/>
        <BlogHeader header = "Latest articles" paragraph = "See our most recent blogs ranging from personal growth, advice, even experience." links = {true}/>
        <Recents/>
        <SignupBanner/>
        <EditorsPicks/>
        <LatestIn/>
      </Layout>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default BlogMain