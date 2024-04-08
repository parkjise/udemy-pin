import React from 'react'
import {AuthButtonsContainer,AuthButton, LinkContainer, LogoContainer, StyledHeader, StyledLink } from './Header.styled'
import {FaPinterest} from 'react-icons/fa'
import { Text } from '../../utils/Text.styled'

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <FaPinterest size={33} color='#e60022'/>
        <Text as="h1" color='#e60022' size="large" className='logo'>Pinterest</Text>
      </LogoContainer>
      <LinkContainer>
        <StyledLink as="a" href='#'>Home</StyledLink>
        <StyledLink as="a" href='#'>Business</StyledLink>
        <StyledLink as="a" href='#'>Blog</StyledLink>
        <AuthButtonsContainer>
          <AuthButton type="highlight">Log in</AuthButton>
          <AuthButton>Sign up</AuthButton>
        </AuthButtonsContainer>
      </LinkContainer>
    </StyledHeader>
  )
}

export default Header
