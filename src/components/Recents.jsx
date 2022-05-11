import tw from "tailwind-styled-components/dist/tailwind"
import styled from 'styled-components'

const Container = tw.section``

const Wrapper = tw.div`
w-full
flex
justify-between
items-center
py-4
border-b-[2px] border-gray-200
`
const SubHeading = tw.h3`
text-2xl
font-bold
`
const AllPosts = tw.p``

const Grid = tw.div`
grid
md:grid-cols-3
md:grid-rows-2
grid-cols-2
grid-rows-3
md:gap-[50px]
gap-4
py-[100px]
`
const MainArticleScss = styled.div`
div{
  background:gray;
  width:100%;
  height:300px;
  border-radius:5px;
}
`

const MainArticle = tw(MainArticleScss)`
col-span-2
row-span-2
`
const SubArticleScss = styled.div`
div{
  background:gray;
  width:100%;
  height:175px;
  border-radius:5px;
}
`

const SubArticle = tw(SubArticleScss)`
`

const ArticleLabel = tw.p`
text-gray-500
text-[15px]
mt-5
`
const ArticleTitle = tw.h2`
text-2xl
font-bold
`
const ArticleSummary = tw.p`
text-base
mt-[20px]
text-gray-700
`

const Recents = () => {
  return (
    <Container>
        <Wrapper>
        <SubHeading>Most Recent Posts</SubHeading>
        <AllPosts>
            View All Posts 
        </AllPosts>
        </Wrapper>
        <Grid>
            <MainArticle>
                <div>
                <img src = "" alt = "article image"></img>
                </div>
                <ArticleLabel>Personal</ArticleLabel>
                <ArticleTitle>This is a test article.</ArticleTitle>
                <ArticleSummary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab amet quidem! Atque voluptatibus, doloremque impedit non neque omnis eaque officia, reprehenderit quam, asperiores nemo perspiciatis! Sunt tempora cumque quae.</ArticleSummary>
            </MainArticle>
            <SubArticle>
                <div>
                <img src = "" alt = "article image"></img>
                </div>
                <ArticleLabel>Growth</ArticleLabel>
                <ArticleTitle>SubArticle testTitle</ArticleTitle>
            </SubArticle>
            <SubArticle>
                <div>
                <img src = "" alt = "article image"></img>
                </div>
                <ArticleLabel>Experience</ArticleLabel>
                <ArticleTitle>SubArticle test post 2</ArticleTitle>
            </SubArticle>
        </Grid>
    </Container>
  )
}

export default Recents