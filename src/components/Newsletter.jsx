import tw from "tailwind-styled-components/dist/tailwind"

const Container = tw.section`
w-full
h-full
mt-[100px]
bg-gray-100
`

const Wrapper = tw.div`
max-w-[1280px]
p-[25px]
py-[100px]
mx-auto
h-full
flex
justify-center
items-center
flex-col
`
const Heading = tw.h3`
text-3xl
font-bold
`
const Paragraph = tw.p`
w-[50%]
text-lg
text-gray-800
text-center
my-2
`
const InputWrapper = tw.div`
flex
justify-center
items-center
mt-[10px]
`
const Input = tw.input`
p-[10px]
w-[200px]
outline-none
focus:ring
ring-blue-200
`
const Button = tw.button`
bg-blue-400
py-[10px]
px-[15px]
text-white
font-bold
hover:bg-blue-500
active:bg-blue-600
`

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Subscribe to our newsletter.</Heading>
        <Paragraph>Love our writtings? We promise we'll only send out emails when we release a blog related to your liking!</Paragraph>
        <InputWrapper>
          <Input placeholder = "Email"/>
          <Button type = "button">Sign Up</Button>
        </InputWrapper>
      </Wrapper>
    </Container>
  )
}

export default Newsletter