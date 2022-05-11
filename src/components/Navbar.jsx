import tw from 'tailwind-styled-components/dist/tailwind'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = tw.section`
  w-[100vw]
  h-[75px]
`
const Layout = tw.div`
  max-w-[1280px]
  px-[25px]
  mx-auto
  h-full
  flex 
  justify-between
  items-center
`

const LeftChildren = styled.div`
h1{
  cursor:pointer;
}
`

const Left = tw(LeftChildren)`
font-bold
flex-1
w-full
h-full
flex
items-center
justify-start
`

const MiddleChildren = styled.nav`
li{
  margin:0px 15px;
  cursor:pointer;
}
`

const Middle = tw(MiddleChildren)`
md:flex
list-none
text-black
text-[15px]
justify-center
items-center
flex-1
w-full
h-full
hidden

`


const RightChildren = styled.div`
div{
  width:50px;
  height:50px;
  background:gray;
  border-radius:500px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
}
p{
  cursor:pointer;
}
`

const Right = tw(RightChildren)`
flex
gap-x-[15px]
items-center
justify-end
flex-1
w-full
h-full
`




const Navbar = () => {
  return (
    <Container>
      <Layout>
        {/* Logo */}
        <Left>
          <Link to = "/">
            <h1>Blog</h1>
          </Link>
        </Left>
        {/* Nav Links */}
        <Middle>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Write</li>
        </Middle>
        {/* User */}
        <Right>
            <div>
              <img src = "" alt = "profile"/>
            </div>
            <p>Log out</p>
        </Right>
      </Layout>
    </Container>
  )
}

export default Navbar