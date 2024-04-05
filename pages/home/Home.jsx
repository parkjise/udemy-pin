import React from 'react'
import { StyledHome } from './Home.Styled'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const Home = () => {
  
  return (
    <StyledHome>
      <div><Header/></div>
      <Footer/>
    </StyledHome>
  )
}

export default Home
