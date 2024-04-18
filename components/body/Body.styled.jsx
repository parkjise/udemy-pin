import styled,{keyframes} from "styled-components";
import {IoIosCloudyNight} from "react-icons/io"

export const StyleBody = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  position: relative;
`

const bounce = keyframes`
  0%{
    transform:translate(-50%,0);
  }
  50%{
    transform:translate(-50%,-2rem);
  }
  100%{
    transform:translate(-50%,0rem);
  }
`

export const  StyledAnimatiedIcon = styled(IoIosCloudyNight)`
  background-color: ${(props) => props.bgColor || "black"};
  color:white;
  border-radius:100rem;
  position: absolute;
  bottom:1rem;
  left: 50%;
  transform: translateX(-50%);
  animation:${bounce} 2s ease-in-out infinite;
  &:hover{
    cursor:pointer;
  }
`