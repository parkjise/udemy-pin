import React from 'react'
import { StyledFooter } from './Footer.styled'
import {MdKeyboardArrowDown} from 'react-icons/md'

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <p>Here' how it works</p>
        <MdKeyboardArrowDown />
      </StyledFooter>
    </div>
  )
}

export default Footer
