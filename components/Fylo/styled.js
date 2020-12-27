import styled, { css } from 'styled-components'
import { devices } from '../../styles/devices'
import { colors } from './variables'

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${colors.darkBlueMain};
  color: ${colors.white};
  h2,
  h3 {
    font-family: 'Raleway';
  }
  p {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
  }
`

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  z-index: 1;

  @media screen and ${devices.tablet} {
    padding: 32px 48px;
  }
`
export const Logo = styled.div`
  display: grid;
  place-items: center;
  width: 120px;

  @media screen and ${devices.tablet} {
    width: 180px;
  }
`

export const Nav = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const NavLink = styled.a`
  margin-left: 24px;
  cursor: pointer;
  padding: 2px 0;
  border-bottom: 1px solid transparent;
  
  flex-shrink: 0;
  &:hover {
    border-bottom: 1px solid white;
    transition: border-bottom .3s ease-in;
  }
`
export const Button = styled.button`
  position: relative;
  outline: none;
  border: none;
  border-image: none;
  display: block;
  height: 48px;
  width: 200px;
  padding-top: 2px;
  border-radius: 24px;
  background: linear-gradient(to right, ${colors.cyan}, ${colors.blue});
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${colors.cyan};
    mix-blend-mode: screen;
    opacity: 0;
    border-radius: 24px;
  }

  ${(props) => {
    if (props.subscribe) {
      return css`
        width: 240px;
        height: 36px;
        border-radius: 18px;
        padding-top: 1px;
        &::after {
          border-radius: 18px;
        }
      `
    }
  }}

  &:hover {
    &:after {
      opacity: 0.5;
      transition: opacity .4s ease-in;
    }
  }
`
export const Section = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;
`
export const SectionContent = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  //height: inherit;
  // border: 1px solid green;
`

export const SVGWrap = styled.div`
  display: grid;
  place-items: center;
  width: ${(props) => props.width};
`
