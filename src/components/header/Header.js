import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { homeTheme, savedArticleTheme } from '../style/ThemeStyles';
import {
  Overlay,
  Section,
  Container,
  Wrapper,
  MenuToggle,
  Logo,
  Nav,
  NavLink,
  Button,
  Logout,
} from './styledHeader';

export default function Header({ loggedIn, setLoggedIn, setShowSignIn }) {
  const location = useLocation().pathname.substring(1);
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    setLoggedIn(false);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <ThemeProvider theme={location === 'saved-news' ? savedArticleTheme : homeTheme}>
      <Section $isOpen={isOpen}>
        <Container $isOpen={isOpen}>
          <Wrapper $isOpen={isOpen}>
            <Logo $isOpen={isOpen} to="/">
              NewsExplorer
            </Logo>
            <MenuToggle onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen} />
          </Wrapper>
          <Nav $isOpen={isOpen} onClick={closeMenu}>
            <NavLink to="/" $active={location === ''}>
              Home
            </NavLink>
            {loggedIn && (
              <NavLink to="/saved-news" $active={location === 'saved-news'}>
                Saved articles
              </NavLink>
            )}
            {!loggedIn && (
              <Button type="button" wide onClick={() => setShowSignIn(true)}>
                Sign in
              </Button>
            )}
            {loggedIn && (
              <Button onClick={handleLogout}>
                Jake
                <Logout />
              </Button>
            )}
          </Nav>
        </Container>
        <Overlay $isOpen={isOpen} onClick={closeMenu} />
      </Section>
    </ThemeProvider>
  );
}
