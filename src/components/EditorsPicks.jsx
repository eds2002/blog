import tw from "tailwind-styled-components/dist/tailwind"

const Container = tw.section`
my-[100px]
`

const Heading = tw.h1`
md:text-3xl
text-2xl
font-bold
mb-[15px]   
`
const Article = tw.div`
border-t-[2px]
py-[20px]
flex
justify-start
items-center
gap-10
`
const Image = tw.img`
min-w-[175px]
min-h-[100px]
bg-gray-500
rounded
`
const Title = tw.h2`
md:text-xl
text-lg
font-bold
`



const EditorsPicks = () => {
  return (
    <Container>
        <Heading>
            Editor's Picks
        </Heading>
        <Article>
            <Image src = "" alt = "article image"/>
            <Title>How to scale customer support without compromising service</Title>
        </Article>
        <Article>
            <Image src = "" alt = "article image"/>
            <Title>Lorem ipsum, dolor sit amet consect</Title>
        </Article>
        <Article>
            <Image src = "" alt = "article image"/>
            <Title>id amet consectetur adipisicing elit. Eius id </Title>
        </Article>
    </Container>
  )
}

export default EditorsPicks