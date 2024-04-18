import React from 'react';
import { StyleBody, StyledAnimatiedIcon } from './Body.styled';
import {HEADINGS} from "../../utils/texts";

const Body = ({toggleTheme}) => {
  return (
    <StyleBody>
      <StyledAnimatiedIcon 
        onClick = {() => toggleTheme}
        size = {50}
        // bgColor={#"000"}
      />
    </StyleBody>
  )
}

export default Body;
