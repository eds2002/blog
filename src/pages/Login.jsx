import tw from "tailwind-styled-components/dist/tailwind"
import { useState } from "react"
import { Link } from "react-router-dom"

const Container = tw.section`
w-100vw
`
const Layout = tw.div`
max-w-[1280px]
px-[25px]
mx-auto
h-full
flex
items-center
justify-center
flex-col
`

const TextWrapper = tw.div`
w-full
flex
justify-center
items-center
flex-col
mt-[100px]
`
const Heading = tw.h1`
text-4xl
font-bold
mt-[25px]
`

const Form = tw.form`
flex
flex-col
justify-center
items-start
p-[50px]
rounded-lg
shadow-xl
bg-gray-50
relative
`
const Input = tw.input`
border
outline-none
py-[5px]
rounded-md
w-[300px]
border-gray-600

focus:ring
ring-blue-200
px-[15px]
bg-transparent
${(p)=> p.nameError ? "border-red-500":p.passError ? "border-red-500" : ""}
`

const Label = tw.label`
mt-[30px]
`
const Button = tw.button`
bg-blue-500
py-[10px]
w-[150px]
rounded-lg
font-bold
text-white
self-center
mt-[30px]
hover:bg-blue-600
active:bg-blue-700
`

const Password = tw.a`
text-blue-500
text-xs
mb-[30px]
mt-2
cursor-pointer
self-end
`

const SignUp = tw.a`
text-blue-500
text-xs
mb-[30px]
mt-2
absolute
bottom-[-15px]
left-0
right-0
text-center
cursor-pointer
`

const Error = tw.span`
text-xs
mt-[5px]
text-red-500
absolute
bottom-[-24px]
`

const Wrapper = tw.div`
flex
flex-col
relative
`

const Login = () => {
    const [nameError, setNameError] = useState(false)
    const [passError, setPassError] = useState(false)
  return (
    <Container>
        <Layout>
            <TextWrapper>
                <Form>
                    <Heading>Let's start writing</Heading>
                    <Wrapper>
                        <Label for = "email">Email</Label>
                        <Input name = "email" nameError = {nameError}/>
                        <Error>{nameError && "Error in your name"}</Error>
                    </Wrapper>
                    <Wrapper>
                        <Label for = "password">Password</Label>
                        <Input name = "password" passError = {passError} type = "password"/>
                        <Error>{passError && "Error in password, try again"}</Error>
                    </Wrapper>
                    <Password>Forgot Password?</Password>
                    <Button>Sign In</Button>
                    <Link to = "/signup">
                        <SignUp>Don't have an account? <b>Sign up</b></SignUp>
                    </Link>
                </Form>
            </TextWrapper>
        </Layout>
    </Container>
  )
}

export default Login