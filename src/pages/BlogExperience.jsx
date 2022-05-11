import tw from "tailwind-styled-components/dist/tailwind"

import { BlogLinks, BlogHeader, Recents, SignupBanner, EditorsPicks, Newsletter, Footer} from "../components"

const Container = tw.section`
w-100vw
`
const Layout = tw.div`
max-w-[1280px]
px-[25px]
mx-auto
h-full
`

const PersonalLinks = tw.nav`
my-[100px]
w-full
`
const Link = tw.a`
text-gray-500
mr-12
`

const BlogExperience = () => {
  return (
    <Container>
        <Layout>
            <BlogLinks active = "experience"/>
            <BlogHeader header = "Experience" paragraph = "Interested in reading other's experiences? This is just the place for that." links = {false}/>
            <PersonalLinks>
              <Link>All</Link>
              <Link>Topic</Link>
              <Link>Topic</Link>
              <Link>Topic</Link>
              <Link>Topic</Link>
              <Link>Topic</Link>
            </PersonalLinks>
            <Recents/>
            <SignupBanner/>
            <EditorsPicks/>
          </Layout>
          <Newsletter/>
    </Container>
  )
}

export default BlogExperience