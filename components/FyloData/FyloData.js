import styled, { css } from 'styled-components'
import { colors } from './colors'
import { devices } from '../../styles/devices'
import LogoSVG from '../../public/fyloData/logo.svg'
import IconDocument from '../../public/fyloData/icon-document.svg'
import IconFolder from '../../public/fyloData/icon-folder.svg'
import IconUpload from '../../public/fyloData/icon-upload.svg'

export default function FyloData() {
  return (
    <Page>
      <Main>
        <FyloFiles>
          <Logo>
            <LogoSVG />
          </Logo>
          <Icons>
            <Button type='button' onClick={(e) => e.preventDefault()}>
              <IconDocument />
            </Button>
            <Button type='button' onClick={(e) => e.preventDefault()}>
              <IconFolder />
            </Button>
            <Button type='button' onClick={(e) => e.preventDefault()}>
              <IconUpload />
            </Button>
          </Icons>
        </FyloFiles>
        <DataStorage>
          <p>
            You’ve used <strong>815 GB</strong> of your storage
          </p>
          <Bar>
            <Point></Point>
            <Label start>0 GB</Label>
            <Label end>1000 GB</Label>
          </Bar>
          <GBLeft>
            <p>185 </p>
            <p>GB left </p>
          </GBLeft>
        </DataStorage>
      </Main>
    </Page>
  )
}

const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: 'Raleway';
  color: white;
  background: url('/fyloData/bg-mobile.png') left 0 bottom 0 / 100% no-repeat;
  background-color: ${colors.veryDarkBlue};

  @media screen and ${devices.tablet} {
    background: url('/fyloData/bg-desktop.png') left 0 bottom 0 / 100% no-repeat;
    background-color: ${colors.veryDarkBlue};
  }
`

const Main = styled.main`
  width: fit-content;
  margin: 0 auto;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and ${devices.tablet} {
    flex-direction: row;
    align-items: flex-end;
    min-height: 60vh;
  }
`
const FyloFiles = styled.div`
  background-color: ${colors.darkBlue};
  padding: 40px 32px;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  border-top-right-radius: 100px;
  margin-bottom: 12px;
  margin-right: 0;

  @media screen and ${devices.tablet} {
   margin-bottom: 0;
   margin-right: 24px;
  }
`

const Logo = styled.div`
  display: grid;
  place-items: center;
  width: 140px;
`
const Icons = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.button`
  border-image: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${colors.veryDarkBlue};
  margin-right: 12px;
  > svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
   > svg > * {
    fill: ${colors.paleBlue};
    transition: fill .3s ease-in;
   }
  }
`
const DataStorage = styled.div`
  background-color: ${colors.darkBlue};
  border-radius: 12px;
  width: 350px;
  position: relative;
  padding: 32px 32px 64px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: ${colors.paleBlue};
    font-size: 14px;
    margin-bottom: 24px;
  }
`

const Bar = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 18px;
  border-radius: 9px;
  background-color: ${colors.veryDarkBlue};

  &:after {
    position: absolute;
    content: '';
    display: block;
    top: 2px;
    right: 18%;
    bottom: 2px;
    left: 2px;
    border-radius: 7px;
    background: linear-gradient(
      to right,
      hsl(6, 100%, 80%),
      hsl(335, 100%, 65%)
    );
  }
`

const Point = styled.div`
  position: absolute;
  right: 18.6%;
  top: 3px;
  display: block;
  background-color: white;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 2;
`

const Label = styled.p`
  position: absolute;
  font-size: 10px;
  height: 12px;
  bottom: -17px;

  ${(props) => {
    if (props.end) {
      return css`
        right: 0;
      `
    }
    if (props.start) {
      return css`
        left: 0;
      `
    }
  }}
`

const GBLeft = styled.div`
  position: absolute;
  bottom: 0px;
  transform: translateY(50%);
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;

  p:first-child {
    color: black;
    font-size: 32px;
    font-weight: 700;
    display: block;
    padding-bottom: 5px;
  }
  p:nth-child(2) {
    font-weight: 700;
    text-transform: uppercase;
    color: ${colors.grayishBlue};
    font-size: 12px;
    margin-left: 6px;
  }

  @media screen and ${devices.tablet} {
    top: -48px;
    right: 32px;
    transform: unset;
    bottom: inset;
    height: 64px;
    border-bottom-right-radius: 0;

    &:after {
      position: absolute;
      content: '';
      border-top: 24px solid white;
      border-left: 24px solid transparent;
      bottom: -23px;
      right: 0;
      display: block;
    }
  }
`
