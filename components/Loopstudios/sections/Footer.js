import styled from 'styled-components'
import { devices } from '../../../styles/devices'
import { colors } from '../variables'
import Image from 'next/image'
import LogoSVG from '../../../public/loopstudio/logo.svg'
import IconFB from '../../../public/loopstudio/icon-facebook.svg'
import IconTwitter from '../../../public/loopstudio/icon-twitter.svg'
import IconPinterest from '../../../public/loopstudio/icon-pinterest.svg'
import IconInstagram from '../../../public/loopstudio/icon-instagram.svg'

export default function Footer() {
  return (
    <FooterSection>
      <FooterNav>
        <LogoWrap>
          <LogoSVG />
        </LogoWrap>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Support</a>
          </li>
        </ul>
        <Icons>
          <IconWrap>
            <IconFB />
          </IconWrap>
          <IconWrap>
            <IconTwitter />
          </IconWrap>
          <IconWrap>
            <IconPinterest />
          </IconWrap>
          <IconWrap>
            <IconInstagram />
          </IconWrap>
        </Icons>
        <Text>© 2021 Loopstudios. All rights reserved.</Text>
      </FooterNav>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  background-color: black;
  width: 100%;
  position: relative;
  min-height: 20vh;
  margin-top: 120px;
  color: white;
  padding: 48px;

  
`

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 36px;
    li {
      padding: 12px 0;
    }
  }

  @media screen and ${devices.tablet} {
   display: grid;
   grid-template-areas: 'logo icons'
   'menu text';
   grid-gap: 12px;

   ul {
    grid-area: menu;
    flex-direction: row;
    margin-bottom: 0;

    li {
     margin-right: 12px;
    }
   }
  }
`

const LogoWrap = styled.div`
  display: grid;
  place-items: center;
  width: 160px;
  margin-bottom: 32px;
  @media screen and ${devices.tablet} {
   grid-area: logo;
   margin-bottom: 0;
  }
`
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 36px;
  @media screen and ${devices.tablet} {
  margin-bottom: 0;
  justify-content: flex-end;
  width: 100%;
  }
  
`

const IconWrap = styled.div`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  margin-right: 18px;
  &:last-child {
   margin-right: 0;
  }
`
const Text = styled.p`
  color: ${colors.darkGray};
  @media screen and ${devices.tablet} {
   width: 100%;
   text-align: right;
  }
`
