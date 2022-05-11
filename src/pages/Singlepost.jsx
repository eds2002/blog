import tw from "tailwind-styled-components/dist/tailwind"

const Container = tw.section`
w-full
h-full
`

const Wrapper = tw.div`
max-w-[1280px]
p-[25px]
py-[100px]
mx-auto
h-full
`

const Title = tw.h1`
md:text-5xl
text-3xl
font-bold
mx-auto
md:w-[80%]
text-center
`

const Writer = tw.div`
flex
md:flex-row
flex-col
gap-3
bg-blue-100
w-[30%]
mx-auto
my-[30px]
py-[10px]
px-[25px]
rounded-lg
flex
justify-center
items-center
hover:shadow-lg
cursor-pointer
transition
duration-[300ms]
text-center
`
const Author = tw.div`
font-bold
`
const Date = tw.div`
text-gray-500
md:text-base
text-xs
`

const Article = tw.div`
max-w-[600px]
mx-auto
mt-[60px]
`

const Paragraph = tw.p`
md:text-lg
text-base
text-gray-800
my-[25px]
`

const Heading = tw.h3`
font-bold
text-xl
`

const Singlepost = () => {
  return (
    <Container>
      <Wrapper>
        <Title>The 11 Best Kayako alternatives for customer support in 2022</Title>
        <Writer>
          <Author>Written by Jane Doe</Author>
          <Date>May 11, 2022</Date>
        </Writer>
        <Article>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod optio tenetur? Voluptatum asperiores incidunt sit pariatur est animi consequuntur cum harum odit vitae, in velit totam necessitatibus facere voluptates?</Paragraph>
          <Heading>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Heading>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod optio tenetur? Voluptatum asperiores incidunt sit pariatur est animi consequuntur cum harum odit vitae, in velit totam necessitatibus facere voluptates?</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod optio tenetur? Voluptatum asperiores incidunt sit pariatur est animi consequuntur cum harum odit vitae, in velit totam necessitatibus facere voluptates?</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod optio tenetur? Voluptatum asperiores incidunt sit pariatur est animi consequuntur cum harum odit vitae, in velit totam necessitatibus facere voluptates?</Paragraph>
          <Heading>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Heading>
        </Article>

      </Wrapper>
    </Container>
  )
}

export default Singlepost