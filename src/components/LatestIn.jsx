import tw from "tailwind-styled-components/dist/tailwind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"


const Container = tw.section`
w-full
h-full
my-[100px]
`
const Heading = tw.h1`
text-center
text-4xl
font-bold
my-[20px]
`
const Topic = tw.div`
my-[75px]
`
const Wrapper = tw.div`
flex
justify-between
mb-5
`
const TopicName = tw.h3`
text-2xl
font-bold
`
const MorePosts = tw.p`
flex
items-center
justify-center
gap-3
`

const ArticlesWrapper = tw.div`\
border-t-[1px]
h-full
w-full
flex
flex-wrap
lg:justify-between
items-center
gap-6
py-[25px]
`
const Article = tw.div`
w-[200px]
md:w-[300px]
`
const Image = tw.img`
w-[200px]
h-[125px]
md:w-[300px]
md:h-[200px]
bg-gray-500
rounded
`
const ArticleLabel = tw.p`
text-gray-500
text-[15px]
mt-5
`
const ArticleTitle = tw.h3`
md:text-xl
text-base
font-bold
`



const LatestIn = () => {
  return (
    <Container>
        <Heading>
            Discover the latest in...
        </Heading>
        <Topic>
            <Wrapper>
                <TopicName>Customer Service</TopicName>
                <MorePosts>
                    View More Posts
                    <FontAwesomeIcon icon = {faCaretRight}/>
                </MorePosts>
            </Wrapper>
            <ArticlesWrapper>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
            </ArticlesWrapper>
            
        </Topic>


        <Topic>
            <Wrapper>
                <TopicName>Experience</TopicName>
                <MorePosts>
                    View More Posts
                    <FontAwesomeIcon icon = {faCaretRight}/>
                </MorePosts>
            </Wrapper>
            <ArticlesWrapper>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
            </ArticlesWrapper>
        </Topic>

        <Topic>
            <Wrapper>
                <TopicName>Personal</TopicName>
                <MorePosts>
                    View More Posts
                    <FontAwesomeIcon icon = {faCaretRight}/>
                </MorePosts>
            </Wrapper>
            <ArticlesWrapper>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
                <Article>
                    <Image src = "" alt = "article image"/>
                    <ArticleLabel>Customer Service</ArticleLabel>
                    <ArticleTitle>The 11 best Kayako alternatives for customer support in 2022</ArticleTitle>
                </Article>
            </ArticlesWrapper>
            
        </Topic>
    </Container>
  )
}

export default LatestIn