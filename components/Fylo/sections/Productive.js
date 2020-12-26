import styled from 'styled-components'
import { devices } from '../devices'
import { colors } from '../variables'
import { Section, SectionContent } from '../styled'

export default function Productive() {
  return (
    <SectionProductive>
      <Content>
        <SectionImage>
          <img src='/fylo/illustration-stay-productive.png' />
        </SectionImage>
        <SectionText>
          <h3>Stay productive, wherever you are</h3>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href=''>
            See how Fylo works<span>&rarr;</span>
          </a>
        </SectionText>
      </Content>
    </SectionProductive>
  )
}

export const SectionProductive = styled(Section)`
  padding: 64px 0;
`
export const Content = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${devices.tablet} {
    flex-direction: row;
  }
`
export const SectionImage = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and ${devices.tablet} {
    width: 50%;
  }
`
export const SectionText = styled.div`
  position: relative;
  max-width: 40ch;
  h3 {
    margin: 18px 0 12px 0;
  }
  p {
    margin-bottom: 12px;
  }
  a {
    display: block;
    width: fit-content;
    margin: 24px 0;
    font-size: 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid ${colors.cyan};
    color: ${colors.cyan};
    font-family: 'Raleway';
    span {
      display: inline-grid;
      position: relative;
      background-color: ${colors.cyan};
      border-radius: 50%;
      width: 16px;
      height: 16px;
      place-items: center;
      margin-left: 6px;
      color: ${colors.white};
      padding-bottom: 2px;
    }
    &:hover {
      color: ${colors.white};
      border-bottom: 1px solid ${colors.white};
      transition: color 0.3s ease-in, background-color 0.3s ease-in;
      span {
        color: ${colors.cyan};
        background-color: ${colors.white};
        transition: color 0.3s ease-in, background-color 0.3s ease-in;
      }
    }
  }
  @media screen and ${devices.tablet} {
    margin-left: 24px;
  }
`
