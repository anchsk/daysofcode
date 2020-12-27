import styled from 'styled-components'
import { devices } from '../../../styles/devices'
import { colors } from '../variables'
import { Section, Button, SectionContent } from '../styled'

export default function Hero() {
  return (
    <SectionHero>
      <Content>
        <SectionImage>
          <img src='/fylo/illustration-intro.png' />
        </SectionImage>

        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button>Get Started</Button>
      </Content>
    </SectionHero>
  )
}

export const SectionHero = styled(Section)`
  min-height: 100vh;
  background: url('/fylo/bg-curvy-mobile.svg') left 0 bottom 0 / 100% no-repeat;
  background-color: ${colors.darkBlueIntro};
  padding-top: 80px;
  margin-bottom: 64px;

  @media screen and ${devices.tablet} {
    background: url('/fylo/bg-curvy-desktop.svg') left 0 bottom 0 / 100% no-repeat;
    background-color: ${colors.darkBlueIntro};
  }
`

export const Content = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 20px 0;
    text-align: center;
    max-width: 40ch;
  }

  p {
    margin-bottom: 24px;
    text-align: center;
    max-width: 40ch;
  }
`
export const SectionImage = styled.div`
  position: relative;
  width: 100%; //100% of section content
  height: 50vh;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`