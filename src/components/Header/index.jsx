import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Img, Menu, Li } from './style'

function Header() {
  const { pathname } = useLocation()
  return (
    <Container>
      <Img src={Logo} />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Início</Link>
        </Li>
        <Li isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
