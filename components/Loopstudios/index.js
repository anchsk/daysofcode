import { useState } from 'react'

import styled, { css } from 'styled-components'
import { devices } from '../../styles/devices'
import { colors } from './variables'
import LogoSVG from '../../public/loopstudio/logo.svg'
import IconHamburger from '../../public/loopstudio/icon-hamburger.svg'
import IconClose from '../../public/loopstudio/icon-close.svg'
import Image from 'next/image'
import Creations from './sections/Creations'
import Footer from './sections/Footer'

export default function Loopstudios() {
  const [menuOpen, setMenuOpen] = useState(false)
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
            {menuOpen ? <IconClose /> : <IconHamburger />}
          </button>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Events</a>
            </li>
            <li>
              <a href='#'>Products</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
          </ul>
        </Nav>
      </Header>

      <Hero>
        <ImageWrap>
          <Image
            src='/loopstudio/desktop/image-hero.jpg'
            layout='fill'
            objectFit='cover'
          />
        </ImageWrap>
        <HeroText>Immersive experience that deliver</HeroText>
      </Hero>

      <InteractiveVR>
        <VRContent>
          <VRImage>
            <Image
              src='/loopstudio/desktop/image-interactive.jpg'
              layout='fill'
              objectFit='cover'
              // width='731px'
              //height='500px'
            />
          </VRImage>
          <VRInfo>
            <VRHeading>The leader in interactive VR</VRHeading>
            <VRText>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </VRText>
          </VRInfo>
        </VRContent>
      </InteractiveVR>

      <Creations />
      <Footer />
    </Page>
  )
}

const Page = styled.div`
  font-family: 'Alata';
  width: 100%;
  height: 100%;
  min-height: 100vh;
  //background-color: #333;
  position: relative;

  h2 {
    color: ${colors.veryDarkGray};
  }
`

const Header = styled.header`
  //border: 1px solid pink;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 1;
  height: 72px;
  padding: 0 32px;
  @media screen and ${devices.tablet} {
    color: white;
    padding: 64px 5%;
    font-size: 16px;
  }
`

const Logo = styled.div`
  display: grid;
  place-items: center;
  width: 120px;
  z-index: 10;

  @media screen and ${devices.tablet} {
    width: 140px;
  }
`

const Nav = styled.nav`
  font-family: 'Josefin Sans';
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
    z-index: 10;
  }

  ${(props) => {
    if (props.menuOpen) {
      return css`
        background-color: ${colors.black};
      `
    }
  }}

  ul {
    text-transform: uppercase;
    list-style: none;
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    color: ${colors.white};
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    align-items: flex-start;
    justify-content: center;
    font-weight: 300;
    font-size: 24px;
    padding: 0 32px;

    li {
      position: relative;
      margin-bottom: 24px;
    }
  }

  @media screen and ${devices.tablet} {
    button {
      display: none;
    }
    ul {
      position: relative;
      text-transform: none;
      background-color: transparent;
      color: white;
      display: flex;
      flex-direction: row;
      height: unset;
      font-weight: 300;
      top: unset;
      left: unset;
      min-height: fit-content;
      width: fit-content;
      align-items: center;
      font-size: 15px;
      padding: 0 0;
      li {
        margin-left: 16px;
        margin-bottom: 0;

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

const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1px solid burlywood;

  @media screen and ${devices.tablet} {
    height: 70vh;
    justify-content: flex-start;
  }
`

const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const HeroText = styled.p`
  font-family: 'Josefin Sans';
  position: relative;
  display: block;
  text-transform: uppercase;
  border: 1px solid white;
  color: ${colors.white};
  width: fit-content;
  font-size: 48px;
  font-weight: 300;
  padding: 24px;
  //margin: 32px;
  margin: 0 5%;
  @media screen and ${devices.tablet} {
    font-size: 48px;
    max-width: 18ch;
    margin-left: 5%;
  }
`
const InteractiveVR = styled.section`
  //background-color: pink;
`

const VRContent = styled.div`
  margin: 64px 5%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 350px;

  @media screen and ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 12px;
    //border: 1px solid blue;
  }
`

const VRImage = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  @media screen and ${devices.tablet} {
    height: 100%;
    grid-column: 1 / span 5;
    grid-row: 1 / span 3;
    align-self: end;
  }
`
const VRInfo = styled.div`
  background-color: ${colors.white};
  margin: 32px 0;
  width: 100%;
  //border: 1px solid green;

  @media screen and ${devices.tablet} {
    grid-column: 5 / span 4;
    grid-row: 2 / span 2;
    z-index: 5;
    padding: 48px 48px 0 48px;
    align-self: end;
    margin: unset;
  }
`
const VRHeading = styled.h2`
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  margin-bottom: 12px;
  line-height: 1.1;
  font-size: 24px;
  width: 100%;
  text-align: center;

  @media screen and ${devices.tablet} {
    font-size: 30px;
    text-align: left;
  }
`

const VRText = styled.p`
  font-size: 14px;
  color: ${colors.darkGray};
  max-width: 48ch;
  text-align: center;
  margin: 0 auto;
  @media screen and ${devices.tablet} {
    text-align: left;
    max-width: unset;
  }
`
