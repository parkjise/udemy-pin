import styled from "styled-components"

export const StyledHome = styled.div`
    /* background-color: red; */
    width: 100vw;
    height: 100vh;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:94% 6%;
  `
  const HomePage1 = styled("div")`
    background-color: blue;
    width: 100vw;
    height: 100vh;
  `
  const HomePage2 = styled.div({
    backgroundColor: "purple",
    width: "100vw",
    height: "100vh"
  })