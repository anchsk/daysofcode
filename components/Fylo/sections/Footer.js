import styled from 'styled-components'
import { devices } from '../devices'
import { colors } from '../variables'
import { Section, SectionContent } from '../styled'
import LogoSVG from '../../../public/fylo/logo-react.svg'
import IconLocation from '../../../public/fylo/icon-location.svg'
import IconPhone from '../../../public/fylo/icon-phone.svg'
import IconEmail from '../../../public/fylo/icon-email.svg'

import IconFb from '../../../public/fylo/facebook-svgrepo-com.svg'
import IconTwitter from '../../../public/fylo/twitter-svgrepo-com.svg'
import IconInstagram from '../../../public/fylo/instagram-svgrepo-com.svg'

export default function Footer() {
  return (
    <FooterSection>
      <Logo>
        <LogoSVG />
      </Logo>
      <Content>
        <Contacts>
          <Address>
            <IconWrap>
              <IconLocation />
            </IconWrap>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </Address>
          <Phone>
            <IconWrap>
              <IconPhone />
            </IconWrap>
            <p>+1-543-123-4567</p>
          </Phone>
          <Email>
            <IconWrap>
              <IconEmail />
            </IconWrap>
            <p>example@fylo.com</p>
          </Email>
        </Contacts>

        <FooterNav>
          <ul>
            <li>
              <a href=''>About Us</a>
            </li>
            <li>
              <a href=''>Jobs</a>
            </li>
            <li>
              <a href=''>Press</a>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href=''>Contact Us</a>
            </li>
            <li>
              <a href=''>Terms</a>
            </li>
            <li>
              <a href=''>Privacy</a>
            </li>
          </ul>
        </FooterNav>
        <Social>
          <a>
            <IconFb />
          </a>
          <a href=''>
            <IconTwitter />
          </a>
          <a href=''>
            <IconInstagram />
          </a>
        </Social>
      </Content>
    </FooterSection>
  )
}

export const FooterSection = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: ${colors.darkBlueFooter};
  padding: 32px 0 64px 0;
  font-size: 14px;

  @media screen and ${devices.tablet} {
    font-size: 12px;
  }
`
export const Logo = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 48px;
  display: grid;
  align-items: left;
  > svg {
    width: 140px;
  }
`
export const Content = styled(SectionContent)`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media screen and ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Contacts = styled.div`
  display: grid;
  grid-template-areas:
    'address'
    'phone'
    'email';
  grid-gap: 18px;

  @media screen and ${devices.tablet} {
    grid-template-areas:
      'address phone'
      'address email';
  }
`
export const Address = styled.div`
  grid-area: address;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 40ch;
`
export const Phone = styled.div`
  grid-area: phone;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const Email = styled.div`
  grid-area: email;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const IconWrap = styled.div`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-top: 4px;
  > svg {
    height: 100%;
  }
  @media screen and ${devices.tablet} {
    margin-top: 2px;
  }
`
export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 12px 0;
  ul {
    list-style: none;
    margin: 12px 0;
    margin-left: 26px;
    li {
      white-space: nowrap;
      margin-bottom: 12px;

      &:hover {
        font-weight: 700;
        transition: font-weight .3s ease-in;
      }
    }
  }
  @media screen and ${devices.tablet} {
    flex-direction: row;
    margin: 0 24px;

    ul {
      margin: 0 24px 0 0;
    }
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  a {
    padding: 2px;
    border: 1px solid white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-left: 12px;
    cursor: pointer;

    &:first-of-type {
      padding: 4px 5px 5px 4px;
      margin-left: 0;
    }

    &:hover {
      border: 1px solid ${colors.cyan};
      transition: border .3s ease-in;
      svg > * {
        fill: ${colors.cyan};
        transition: fill .3s ease-in;
      }
    }
  }
  @media screen and ${devices.tablet} {
    align-items: flex-start;
    width: fit-content;
  }
`
