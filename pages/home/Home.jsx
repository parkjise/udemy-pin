import React from 'react'
import { StyledHome } from './Home.Styled'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Body from '../../components/body/Body'


const Home = () => {
  
  return (
    <StyledHome>
      <div>
        <Header/>
        <Body/>
      </div>
      <Footer/>
    </StyledHome>
  )
}

export default Home
