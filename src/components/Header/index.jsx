import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Img, Menu, Li } from './style'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.scrollY <= 150) {
      setChangeBackground(false)
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      <Img src={Logo} />
      <Menu>
        <Li changeBackground={changeBackground} isActive={pathname === '/'}>
          <Link to="/">Início</Link>
        </Li>
        <Li
          changeBackground={changeBackground}
          isActive={pathname.includes('filmes')}
        >
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li
          changeBackground={changeBackground}
          isActive={pathname.includes('series')}
        >
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header
