import tw from "tailwind-styled-components/dist/tailwind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBook, faHistory } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Links = tw.nav`
flex
w-full
py-[50px]
justify-between
md:flex-row
flex-col
gap-5
`

const ListItem = tw.li`
bg-gray-200
list-none
py-[15px]
rounded-md
md:w-[30%]
w-full
text-center
flex
items-center
justify-center
gap-4
text-gray-600
cursor-pointer
hover:shadow
hover:shadow-lg
${(p) => (p.color === "blue" ? "hover:shadow-blue-200 hover:bg-blue-100" : p.color === "red" ? "hover:shadow-red-200 hover:bg-red-100" : p.color === "green" ? "hover:shadow-green-200 hover:bg-green-100" : "")}
transition
duration-[325ms]
`

const Icon = tw.div`
${(p) => (p.color === "blue" ? "text-blue-500" : p.color === "red" ? "text-red-800" : p.color === "green" ? "text-green-800" : "")}
text-xl
`
const TopicLinks = () => {
  return (
    <Links>
        <ListItem color = "blue">
            Personal
            <Icon color = "blue" >
            <FontAwesomeIcon icon={faUser} />
            </Icon>
        </ListItem>
        <ListItem color = "red">
            Advice
            <Icon color = "red" >
            <FontAwesomeIcon icon={faBook} />
            </Icon>
        </ListItem>
        <ListItem color = "green">
            Experience
            <Icon color = "green" >
            <FontAwesomeIcon icon={faHistory} />
            </Icon>
        </ListItem>
    </Links>
  )
}

export default TopicLinks