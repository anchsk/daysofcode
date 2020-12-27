import {
  Page,
  Header,
  Logo,
  Nav,
  NavLink
} from './styled'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Productive from './sections/Productive'
import Subscribe from './sections/Subscribe'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'
import LogoSVG from '../../public/fylo/logo-react.svg'

export default function Fylo() {
  return (
    <Page>
      <Header>
        <Logo>
          <LogoSVG />
        </Logo>
        <Nav>
          <NavLink href='#features'>Features</NavLink>
          <NavLink href='#'>Team</NavLink>
          <NavLink href='#'>Sign In</NavLink>
        </Nav>
      </Header>
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <Subscribe />
      <Footer />
    </Page>
  )
}
