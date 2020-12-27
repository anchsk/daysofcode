import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { devices } from '../../../styles/devices'
import { colors } from '../variables'
import { SectionContent, Button, Section } from '../styled'

export default function Subscribe() {
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    if (value.length > 5) {
      setError('Please enter a valid email address')
    }
  }, [value])
  return (
    <SectionSubscribe>
      <Content>
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <Form noValidate>
          <input
            type='email'
            name='email'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='email@example.com'
          />
          <Error>{error}</Error>
          <Button subscribe type='submit' onClick={(e) => e.preventDefault()}>
            Get Started For Free
          </Button>
        </Form>
      </Content>
    </SectionSubscribe>
  )
}

export const SectionSubscribe = styled(Section)`
  background: linear-gradient(
    ${colors.darkBlueMain} 50%,
    ${colors.darkBlueFooter} 50%
  );
  padding: 64px 0;
`

export const Content = styled(SectionContent)`
  width: 60%; //need fix
  margin: 0 auto;
  background-color: ${colors.darkBlueIntro};
  padding: 24px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 8px rgba(0,0,0,0.3);

  h3 {
    margin-bottom: 12px;
    text-align: center;
  }
  p {
    text-align: center;
    max-width: 48ch;
    margin-bottom: 20px;
  }
  /* @media screen and ${devices.tablet} {
    width: 60%;
  } */
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;

  input {
    height: 36px;
    border-radius: 18px;
    width: 100%;
    border: none;
    outline: none;
    border-image: none;
    padding: 12px;
  }
  button {
    width: 100%;
  }

  @media screen and ${devices.laptop} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 12px;
    width: 70%;
  }
`

export const Error = styled.div`
  color: ${colors.lightRed};
  height: 20px;
  font-size: 10px;
  margin-top: 2px;
  padding-left: 12px;
  width: 100%;
  @media screen and ${devices.laptop} {
    order: 2;
  }
`
