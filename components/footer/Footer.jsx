import React from 'react'
import { StyledFooter } from './Footer.styled'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { Text } from '../../utils/Text.styled'

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <Text as="h1" size="normal" color='#000'>Here' how it works</Text>
        <MdKeyboardArrowDown />
      </StyledFooter>
    </div>
  )
}

export default Footer
