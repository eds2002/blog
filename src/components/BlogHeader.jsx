import tw from "tailwind-styled-components/dist/tailwind"
import { TopicLinks } from '../components/'

const Container = tw.div`
mt-[20px]
`
const Header = tw.h1`
font-bold
text-5xl
`
const Paragraph = tw.p`
text-gray-500
md:text-xl
text-base
mt-2
`
const BlogHeader = ({header, paragraph, links}) => {
  return (
    <Container>
        <Header>{header}</Header>
        <Paragraph>{paragraph}</Paragraph>
        {links &&
          <TopicLinks/>
        }
    </Container>
  )
}

export default BlogHeader