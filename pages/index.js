//import styles from '../styles/Home.module.scss'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import IconTwitter from '../public/fylo/twitter-svgrepo-com.svg'

export default function Home() {
  return (
    <Page>
      <Header>
        <h1>Days of code</h1>
      </Header>
      <Main>
        <Content>
          <Card>
            <Link href='/fylo'>
              <A>
                <ImageWrap>
                  <Image
                    src='/images/fylo-desktop.png'
                    layout='fill'
                    objectFit='cover'
                  />
                </ImageWrap>
                <CardTitle>
                  <Day>02</Day>
                  <h2>Fylo Landing Page</h2>
                </CardTitle>
              </A>
            </Link>
            <CardDescription>
              <p>Solution for a <a href='https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd'>frontendmentor.io</a> challenge. Made with styled-components.</p>
            </CardDescription>
          </Card>
          <Card>
            <Link href='/chat-app'>
              <A>
                <ImageWrap>
                  <Image
                    src='/images/chat-desktop.png'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='50% 50%'
                  />
                </ImageWrap>
                <CardTitle>
                  <Day>01</Day>
                  <h2>Chat app</h2>
                </CardTitle>
              </A>
            </Link>
            <CardDescription>
            <p>Solution for a <a href='https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY'>frontendmentor.io</a> challenge. SCSS modules & CSS animations</p>
            </CardDescription>
          </Card>
        </Content>
      </Main>

      <Footer>
        <a href='https://twitter.com/annaciao'>
          <div>
            <IconTwitter />
          </div>
          @annaciao
        </a>
      </Footer>
    </Page>
  )
}
const Page = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, hsl(28, 80%, 95%), white);
  color: #333;

  h2 {
    font-size: 16px;
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  //text-transform: lowercase;
  font-weight: 700;

  h1 {
    padding: 24px 0 12px 0;
    font-size: 18px;
    color: #333;
  }
`
const Main = styled.main`
  flex-grow: 1;
`
const Footer = styled.footer`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #333;

  a {
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.5;
      transition: opacity 0.3s ease-in;
    }
  }

  div {
    display: grid;
    place-items: center;
    width: 18px;
    padding-top: 2px;

    svg {
      width: 18px;
      > * {
        fill: #333;
      }
    }
  }
`

const Content = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 12px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.div``

const A = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //justify-content: center;
  width: 100%;
  min-height: fit-content;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in;
  }
`
const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
`
const CardTitle = styled.div`
  position: relative;
  padding: 12px 0;
`
const CardDescription = styled.p`
  font-size: 12px;
  a {
    text-decoration: underline;
  }
`

const Day = styled.p`
  font-weight: 700;
  padding: 0;
  line-height: 1;
  color: lightgray;
  margin-bottom: 3px;
`
