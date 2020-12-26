import styled from 'styled-components'
import { devices } from '../devices'
import { colors } from '../variables'
import { Section, SVGWrap, SectionContent } from '../styled'
import AccessSVG from '../../../public/fylo/icon-access-anywhere.svg'
import SecuritySVG from '../../../public/fylo/icon-security.svg'
import CollaborationSVG from '../../../public/fylo/icon-collaboration.svg'
import AnyFileSVG from '../../../public/fylo/icon-any-file.svg'

export default function Features() {
  return (
    <SectionFeatures id='features'>
      <Content>
        <Card>
          <SVGWrap>
            <AccessSVG />
          </SVGWrap>
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </Card>
        <Card>
          <SVGWrap>
            <SecuritySVG />
          </SVGWrap>
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </Card>
        <Card>
          <SVGWrap>
            <CollaborationSVG />
          </SVGWrap>
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </Card>
        <Card>
          <SVGWrap>
            <AnyFileSVG />
          </SVGWrap>
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </Card>
      </Content>
    </SectionFeatures>
  )
}

export const SectionFeatures = styled(Section)`
  padding: 64px 0;
`

export const Content = styled(SectionContent)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${devices.tablet} {
    width: 60%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 40ch;

  h3 {
    margin: 24px 0 12px 0;
  }

  p {
    text-align: center;
  }
`
