import styled from 'styled-components'
import { devices } from '../../../styles/devices'
import { colors } from '../variables'
import { Section, SectionContent } from '../styled'

export default function Testimonials() {
  return (
    <SectionTestimonials>
      <Content>
        <CardTestimonial>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <Person>
            <PersonPhoto src='/fylo/profile-1.jpg' />
            <PersonInfo>
              <p>Satish Patel</p>
              <p>Founder & CEO, Huddle</p>
            </PersonInfo>
          </Person>
        </CardTestimonial>
        <CardTestimonial>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <Person>
            <PersonPhoto src='/fylo/profile-2.jpg' />
            <PersonInfo>
              <p>Bruce McKenzie</p>
              <p>Founder & CEO, Huddle</p>
            </PersonInfo>
          </Person>
        </CardTestimonial>
        <CardTestimonial>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <Person>
            <PersonPhoto src='/fylo/profile-3.jpg' />
            <PersonInfo>
              <p>Iva Boyd</p>
              <p>Founder & CEO, Huddle</p>
            </PersonInfo>
          </Person>
        </CardTestimonial>
      </Content>
    </SectionTestimonials>
  )
}

export const SectionTestimonials = styled(Section)`
  padding: 64px 0;
`
export const Content = styled(SectionContent)`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const CardTestimonial = styled.div`
  position: relative;
  background-color: ${colors.darkBlueTestim};
  padding: 24px 18px;
  border-radius: 6px;
  font-size: 12px;
  width: fit-content;
  max-width: 48ch;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-of-type {
    margin-top: 0;
    &::before {
      content: '';
      width: 30px;
      height: 30px;
      background: url('/fylo/bg-quotes.png');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: -18px;
      left: -5px;
    }
  }

  @media screen and ${devices.tablet} {
    margin-top: 0;
    margin-left: 24px;
    &:first-of-type {
      align-self: stretch;
      margin-left: 0;
    }
  }
`

export const Person = styled.div`
  display: flex;
  margin-top: 18px;
  height: 48px;
  font-family: 'Raleway';
`
export const PersonPhoto = styled.img`
  border-radius: 50%;
  height: 100%;
`
export const PersonInfo = styled.div`
  margin-left: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:first-child {
    font-weight: 700;
  }
  p:nth-child(2) {
    font-size: 10px;
  }
`
