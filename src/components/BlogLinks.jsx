import styled from 'styled-components'
import tw from 'tailwind-styled-components/dist/tailwind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Container = tw.div`
flex
list-none
md:gap-x-[50px]
text-gray-400
py-[15px]
`

// const Link = tw.li`
// md:flex
// cursor-pointer
// ${(p)=> p.active ? "text-black": "hidden"}

// `

const Icon = tw.div`
md:hidden
inline
text-black
cursor-pointer
`

const LinkItem = tw.li`
md:flex
cursor-pointer
${(p)=> p.active ? "text-black": "hidden"}
mr-[10px]
`

const BlogLinks = ({active}) => {
  
  return (
    <Container>
      <Link active = {active === "latest" ? true : false} to = "/">
        <LinkItem active = {active === "latest" ? true : false}>Latest Articles</LinkItem>
      </Link>
      <Link active = {active === "personal" ? true : false} to = "/personal">
        <LinkItem active = {active === "personal" ? true : false}>Personal</LinkItem>
      </Link>
      <Link to = "/advice">
        <LinkItem active = {active === "advice" ? true : false} >Advice</LinkItem>
      </Link>
      <Link to = "/experience">
        <LinkItem active = {active === "experience" ? true : false}>Experience</LinkItem>
      </Link>
      <Icon>
          <FontAwesomeIcon icon = {faCaretDown}/>
      </Icon>
    </Container>
  )
}

export default BlogLinks