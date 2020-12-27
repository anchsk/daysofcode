import { useState } from 'react'
import styled, { css } from 'styled-components'
import { devices } from '../../styles/devices'
import { colors } from './colors'
import LogoSVG from '../../public/room/logo.svg'
import IconHamburger from '../../public/room/icon-hamburger.svg'
import IconClose from '../../public/room/icon-close.svg'
import IconLeft from '../../public/room/icon-angle-left.svg'
import IconRight from '../../public/room/icon-angle-right.svg'
import IconArrow from '../../public/room/icon-arrow.svg'
import Image from 'next/image'

export default function Room() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const nextSlide = (e) => {
    e.preventDefault()
    setCurrentSlide((currentSlide + 1) % 3)
  }
  const prevSlide = (e) => {
    e.preventDefault()
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
  }
  const toggleMenu = (e) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  return (
    <Page>
      <Header>
        <Logo>
          <LogoSVG />
        </Logo>
        <Nav menuOpen={menuOpen}>
          <button type='button' onClick={toggleMenu}>
            <IconHamburger />
          </button>
          <ul>
            <button type='button' onClick={toggleMenu}>
              <IconClose />
            </button>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Shop</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </Nav>
      </Header>
      <Slide>
        <SlideImage /* visible={currentSlide === 0} */>
          <SlidingImage visible={currentSlide === 0}>
            <Image
              src={`/room/desktop-image-hero-1.jpg`}
              layout='fill'
              objectFit='cover'
              objectPosition='50% 50%'
            />
          </SlidingImage>
          <SlidingImage visible={currentSlide === 1}>
            <Image
              src={`/room/desktop-image-hero-2.jpg`}
              layout='fill'
              objectFit='cover'
              objectPosition='50% 50%'
            />
          </SlidingImage>
          <SlidingImage visible={currentSlide === 2}>
            <Image
              src={`/room/desktop-image-hero-3.jpg`}
              layout='fill'
              objectFit='cover'
              objectPosition='50% 50%'
            />
          </SlidingImage>
        </SlideImage>
        <SlideContent>
          <Buttons>
            <button type='button' onClick={prevSlide}>
              <IconLeft />
            </button>
            <button ype='button' onClick={nextSlide}>
              <IconRight />
            </button>
          </Buttons>
          <Text>
            <SlidingText visible={currentSlide === 0}>
              <h2>Discover innovative ways to decorate</h2>

              <p>
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
            </SlidingText>
            <SlidingText visible={currentSlide === 1}>
              <h2>We are available all across the globe</h2>
              <p>
                We are available all across the globe With stores all over the
                world, it's easy for you to find furniture for your home or
                place of business. Locally, we’re in most major cities
                throughout the country. Find the branch nearest you using our
                store locator. Any questions? Don't hesitate to contact us
                today.
              </p>
            </SlidingText>
            <SlidingText visible={currentSlide === 2}>
              <h2>Manufactured with the best materials</h2>
              <p>
                Our modern furniture store provide a high level of quality. Our
                company has invested in advanced technology to ensure that every
                product is made as perfect and as consistent as possible. With
                three decades of experience in this industry, we understand what
                customers want for their home and office.
              </p>
            </SlidingText>
          </Text>
          <ShopNow href='#'>
            Shop now{' '}
            <span>
              <IconArrow />
            </span>
          </ShopNow>
        </SlideContent>
      </Slide>

      <About>
        <ImageWrap>
          <Image
            src='/room/image-about-dark.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImageWrap>
        <AboutContent>
          <h3>About our furniture</h3>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </AboutContent>
        <ImageWrap>
          <Image
            src='/room/image-about-light.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImageWrap>
      </About>
    </Page>
  )
}

const Page = styled.div`
  position: relative;
  width: 100%;
  font-family: 'Spartan';
  p {
    color: ${colors.darkGray};
    line-height: 1.6;
    max-width: 48ch;
    font-size: 12px;
  }
`

const Header = styled.header`
  //border: 1px solid pink;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  //padding: 24px 0;
  height: 72px;
  @media screen and ${devices.tablet} {
    color: white;
    padding: 64px 32px;
    font-size: 16px;
  }
`

const Logo = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  width: 100%;
  z-index: 0;
  height: 16px;
  padding-bottom: 2px;
  svg {
    height: 14px;
  }
  @media screen and ${devices.tablet} {
    color: white;
    position: relative;
    width: fit-content;
    margin-right: 32px;
    height: 20px;
    svg {
     height: 18px;
    }
  }
`

const Nav = styled.nav`
  button {
    position: relative;
    border: none;
    outline: none;
    background: transparent;
    display: grid;
    place-items: center;
    width: 24px;
    margin-left: 24px;
    cursor: pointer;
  }

  ${(props) => {
    if (props.menuOpen) {
      return css`
        button {
          display: none;
        }
      `
    }
    if (props.menuOpen === false) {
      return css`
        ul {
          button {
            display: none;
          }
        }
      `
    }
  }}

  ul {
    text-transform: lowercase;
    list-style: none;
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: row;
    color: black;
    width: 100%;
    background-color: white;
    position: absolute;
    height: 72px;
    top: 0;
    align-items: center;
    font-weight: 700;

    button {
      position: relative;
      border: none;
      outline: none;
      background: transparent;
      display: grid;
      place-items: center;
      width: 24px;
      margin-left: 24px;
      margin-right: 32px;
      margin-bottom: 2px;
      cursor: pointer;
    }

    li {
      position: relative;
      margin-right: 24px;
    }
  }

  @media screen and ${devices.tablet} {
    button {
      display: none;
    }
    ul {
      position: relative;
      background-color: transparent;
      width: unset;
      color: white;
      display: flex;
      visibility: visible;
      height: unset;
      font-weight: 500;
      button {
        display: none;
      }
      li {
        &:after {
          opacity: 0;
          content: '';
          display: block;
          position: absolute;
          width: 50%;
          height: 2px;
          bottom: -5px;
          background-color: white;
          transform: translateX(50%);
        }
        &:hover {
          &:after {
            opacity: 1;
            transition: opacity 0.3s ease-in;
          }
        }
      }
    }
  }
`

const Slide = styled.section`
  position: relative;
  width: 100%;

  @media screen and ${devices.tablet} {
    display: grid;
    grid-template-columns: calc(75vw - 96px) auto;
    height: 70vh;
  }
`
const SlideImage = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  display: block;
  background-color: black;
`
const SlidingImage = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  will-change: opacity;

  ${(props) => {
    if (props.visible) {
      return css`
        opacity: 1;
        transition: opacity 0.3s ease-in;
        transition-delay: 0.3s;
      `
    }
  }}
`

const SlideContent = styled.div`
  position: relative;
  padding: 0px 32px;
  height: fit-content;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and ${devices.tablet} {
    height: 100%;
  }
`
const Text = styled.div`
  //border: 1px solid blue;
  position: relative;
  width: 100%;
  height: fit-content;
  min-height: 35vh;

  @media screen and ${devices.tablet} {
    height: unset;
    min-height: 60%;
    overflow: hidden;
  }
`
const SlidingText = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: fit-content;
  //border: 1px solid red;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  will-change: opacity;

  h2 {
    font-size: 24px;
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 12px;
  }

  ${(props) => {
    if (props.visible) {
      return css`
        display: block;
        opacity: 1;
        transition: opacity 0.3s ease-in;
        transition-delay: 0.3s;
      `
    }
  }}
`
const ShopNow = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 4px;
  margin-top: 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: ${colors.darkGray};
    transition: color 0.3s ease-in;
    svg {
     fill: ${colors.darkGray};
     transition: fill 0.3s ease-in;
    }
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: -48px;
  z-index: 10;
  right: 0;
  button {
    border: none;
    outline: none;
    border-image: none;
    background-color: black;
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    padding-bottom: 1px;
    cursor: pointer;
    &:first-of-type {
      padding-right: 3px;
    }
    &:nth-child(2) {
      padding-left: 3px;
    }
    svg {
      height: 18px;
      width: 100%;
    }
    &:hover {
      background-color: ${colors.veryDarkGray};
      transition: background-color 0.3s ease-in;
    }
  }
  @media screen and ${devices.tablet} {
    top: unset;
    right: unset;
    bottom: 0;
    left: 0;
  }
`
const About = styled.section`
  display: grid;
  grid-template-rows: 1.5fr 1fr 1.5fr;
  grid-template-columns: 1fr;

  @media screen and ${devices.tablet} {
    height: 30vh;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 1fr;
  }
`
const ImageWrap = styled.div`
  width: 100%;
  position: relative;
  display: block;
`
const AboutContent = styled.div`
  padding: 36px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 10px;
    text-transform: uppercase;
    padding-bottom: 12px;
  }
  @media screen and ${devices.tablet} {
    height: 100%;
    padding: 0px 36px;
  }
`
