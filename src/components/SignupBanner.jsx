import tw from "tailwind-styled-components/dist/tailwind"
import bannerImg from '../assets/personwithfile.svg'
import { Link } from "react-router-dom"


const Banner = tw.div`
w-full
h-[400px]
bg-blue-100
rounded-md
p-[50px]
flex
items-start
relative
hover:shadow
hover:shadow-xl
cursor-pointer
transition
duration-[250ms]
my-[50px]
`

const Paragraph = tw.p`
text-gray-500
md:text-xl
text-base
mt-2
`

const BannerWrapper = tw.div`
w-full
h-full
flex
flex-col
items-start
justify-center
gap-3
z-[2]
`

const Heading = tw.h1`
md:text-5xl
text-4xl
font-bold
z-4
`
const Button = tw.button`
bg-blue-400
w-[150px]
py-[15px]
rounded-md
mt-4
font-bold
text-white
cursor-pointer
hover:bg-blue-500
transition
duration-[250ms]
`
const Svg = tw.img`
z-[1]
w-[300px]
h-[300px]
md:w-[50%]
md:h-full
absolute
right-0
bottom-0
p-[25px]
`

const SignupBanner = () => {
  return (
    <Link to = "/signup">
      <Banner>
          <BannerWrapper>  
            <Heading>
                Interested in writing?
            </Heading>
            <Paragraph>
                Sign up today to start writing your own blogs.
            </Paragraph>
            <Button>
              <Link to = "signup">
                Sign up for free
              </Link>
            </Button>
          </BannerWrapper>
          <Svg src = {bannerImg}/>
      </Banner>
    </Link>
  )
}

export default SignupBanner