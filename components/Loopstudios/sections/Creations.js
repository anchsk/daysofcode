import styled from 'styled-components'
import { devices } from '../../../styles/devices'
import { colors } from '../variables'
import Image from 'next/image'
import useWindowSize from '../../../hooks/useWindowSize'

export default function Creations() {
const size = useWindowSize()
console.log(size.width)

const width = size.width > 768 ? 'desktop' : 'mobile';
  return (
    <Section>
      <CreationsHeading>Our creations</CreationsHeading>
      <ButtonSeeAll type='button' onClick={(e) => e.preventDefault()}>
        SEE ALL
      </ButtonSeeAll>

      <Grid>
        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-deep-earth.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>Deep earth</CardText>
        </CardWrap>

        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-night-arcade.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>Night arcade</CardText>
        </CardWrap>

        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-soccer-team.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>Soccer team vr</CardText>
        </CardWrap>

        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-grid.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>The grid</CardText>
        </CardWrap>

        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-from-above.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>From up above vr</CardText>
        </CardWrap>

        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-pocket-borealis.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>Pocket borealis</CardText>
        </CardWrap>

        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-curiosity.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>The curiosity</CardText>
        </CardWrap>

        <CardWrap>
          <Image
            src={`/loopstudio/${width}/image-fisheye.jpg`}
            layout='fill'
            objectFit='cover'
          />
          <CardText>Make it fisheye</CardText>
        </CardWrap>
      </Grid>
    </Section>
  )
}

const Section = styled.section`
  margin: 0 5%;
  //background-color: palegoldenrod;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  //width: 100%;
  @media screen and ${devices.tablet} {
    display: block;
  }
`

const CreationsHeading = styled.h2`
  height: 30px;
  font-size: 24px;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and ${devices.tablet} {
    font-size: 30px;
  }
`

const Grid = styled.div`
  position: relative;
  width: 100%;
  

  @media screen and ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 12px;
  }
`
const CardWrap = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 12px;

  @media screen and ${devices.tablet} {
    height: 320px;
    margin-bottom: unset;
  }
`
const CardText = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, black);
  bottom: 0;
  left: 0;
  color: ${colors.white};
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  font-size: 24px;
  padding: 12px;
  font-weight: 300;
`

const ButtonSeeAll = styled.button`
  background: transparent;
  position: absolute;
  letter-spacing: 2px;
  height: 24px;
  font-size: 10px;
  padding: 0 12px;

  outline: none;
  border: 1px solid black;
  cursor: pointer;
  bottom: -50px;
  z-index: 10;

  &:hover {
    color: ${colors.white};
    background-color: black;
  }

  @media screen and ${devices.tablet} {
    top: 0;
    right: 0;
  }
`
