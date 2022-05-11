import tw from "tailwind-styled-components/dist/tailwind"
import styled from 'styled-components'
import { useState } from "react"
import { Link } from "react-router-dom"

const Container = tw.section`
w-100vw
h-100vh
bg-red-500
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
mx-[25px]
max-w-[500px]
w-[90%]
`
const Input = tw.input`
border
outline-none
py-[5px]
rounded-md
border-gray-600
focus:ring
ring-blue-200
px-[15px]
bg-transparent
${(p)=> p.width === "small" ? "md:w-[200px] w-full" : ""}
${(p)=> p.nameError ? "border-red-500":p.passError ? "border-red-500" : ""}
`

const Label = tw.label`
mt-[20px]
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
${(p) => p.flex === "row" ? "md:flex-row flex-col w-full " : "flex-col w-full"}
`

const Signup = () => {
  return (
    <Container>
        <Layout>
            <TextWrapper>
                <Form>
                    <Heading>Let's start writing</Heading>
                    <Wrapper flex="row">
                        <Wrapper>
                            <Label for = "first">First Name</Label>
                            <Input name = "first" width = "small"/>
                            <Error></Error>
                        </Wrapper>
                        <Wrapper self = "end">
                            <Label for = "last">Last Name</Label>
                            <Input name = "last" width = "small" self = "end"/>
                            <Error></Error>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper>
                        <Label for = "email">Email</Label>
                        <Input name = "email" type = "email"/>
                        <Error></Error>
                    </Wrapper>
                    <Wrapper>
                        <Label for = "password">Password</Label>
                        <Input name = "password" type = "password"/>
                        <Error></Error>
                    </Wrapper>
                    <Button>Sign In</Button>
                    <Link to = "/signin">
                        <SignUp>Already have an account? <b>Sign up</b></SignUp>
                    </Link>
                </Form>
            </TextWrapper>
        </Layout>
    </Container>
  )
}

export default Signup