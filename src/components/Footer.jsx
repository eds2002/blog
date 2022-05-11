import tw from "tailwind-styled-components/dist/tailwind"
const Container = tw.section`
bg-blue-900
pt-[50px]
w-[100vw]
`

const Layout = tw.div`
max-w-[1280px]
p-[25px]
mx-auto
h-full
flex
flex-col
justify-between
text-white
`

const ColumnWrapper = tw.div`
flex
w-full
h-full
justify-between
`

const Column = tw.div`
flex
flex-col
gap-3
`
const Logo = tw.h2`
text-base
font-bold
`
const Slogan = tw.p`
text-xl
`
const Heading = tw.h3`
text-base
font-bold
text-white
`
const Link = tw.p`
text-xs
text-gray-300
`

const Bottom = tw.div`
mt-[50px]
border-t-[1px]
border-gray-500
flex
justify-center
items-center
`
const Text = tw.div`
text-xs
text-center
mt-[15px]
`




const Footer = () => {
  return (
    <Container>
      <Layout>
        <ColumnWrapper>
          <Column>
            <Logo>Blog</Logo>
            <Slogan>A place to be yourself.</Slogan>
          </Column>
          <Column>
            <Heading>QuickLinks</Heading>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Sign Up</Link>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <Link>Contact Us</Link>
            <Link>Terms & Privacy</Link>
          </Column>
        </ColumnWrapper>
        <Bottom>
          <Text>© 2022 Blog</Text>
        </Bottom>
      </Layout>
    </Container>
  )
}

export default Footer